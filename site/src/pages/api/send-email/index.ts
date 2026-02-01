import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;
const SUPPORT_EMAIL = "info@acepropertieskc.com";
const NOTIFICATION_EMAIL = "aaron@aprkc.com";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY is not configured; form submissions will fail.");
}

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, private",
    },
  });
};

function respondJson(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, private",
    },
  });
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const MIN_SUBMIT_MS = 2500;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch (err) {
    console.error("Send email error:", err);
    return respondJson({ error: "Invalid request" }, 400);
  }

  if (!body || typeof body !== "object") {
    return respondJson({ error: "Invalid request" }, 400);
  }

  const fieldErrors: Record<string, string> = {};

  const website = isNonEmptyString(body.website) ? body.website.trim() : "";
  if (website) {
    return respondJson(
      {
        ok: false,
        error: "validation_error",
        fields: { form: "Unable to process submission." },
      },
      422,
    );
  }

  const startedRaw = body.form_started_at;
  let startedAt = Number.NaN;
  if (typeof startedRaw === "string" && startedRaw.trim()) {
    startedAt = Number(startedRaw);
  } else if (typeof startedRaw === "number") {
    startedAt = startedRaw;
  }

  if (!Number.isFinite(startedAt)) {
    fieldErrors.form_started_at = "Please try submitting again.";
  } else {
    const elapsed = Date.now() - startedAt;
    if (elapsed < MIN_SUBMIT_MS) {
      return respondJson({ ok: false, error: "rate_limited" }, 429);
    }
  }

  const address = isNonEmptyString(body.address) ? body.address.trim() : "";
  if (!address) {
    fieldErrors.address = "Address is required.";
  }

  const consentValue = body.consent;
  const consentAccepted = consentValue === true || consentValue === "true";
  if (!consentAccepted) {
    fieldErrors.consent = "Consent is required.";
  }

  const phone = isNonEmptyString(body.phone) ? body.phone.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  if (!phone && !email) {
    fieldErrors.contact = "Provide a phone or email.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return respondJson(
      {
        ok: false,
        error: "validation_error",
        fields: fieldErrors,
      },
      422,
    );
  }

  const name = isNonEmptyString(body.name) ? body.name.trim() : "Not provided";
  const situation = isNonEmptyString(body.situation) ? body.situation.trim() : "Not provided";
  const timeline = isNonEmptyString(body.timeline) ? body.timeline.trim() : "Not provided";
  const notes = isNonEmptyString(body.notes) ? body.notes.trim() : "";

  if (!SENDGRID_API_KEY) {
    console.error("Cannot send email: missing SENDGRID_API_KEY.");
    return respondJson({ ok: false, error: "email_disabled" }, 500);
  }

  const submittedAt = new Date().toISOString();
  const subject = `New ACE Properties KC inquiry - ${address}`;
  const textLines = [
    `Address: ${address}`,
    `Name: ${name}`,
    `Phone: ${phone || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Situation: ${situation}`,
    `Timeline: ${timeline}`,
    `Notes: ${notes || "None"}`,
    `Consent: ${consentAccepted ? "Granted" : "Pending"}`,
    `Submitted at: ${submittedAt}`,
  ];

  const message = {
    to: NOTIFICATION_EMAIL,
    from: SUPPORT_EMAIL,
    replyTo: SUPPORT_EMAIL,
    subject,
    text: textLines.join("\n"),
    html: `
      <p><strong>New property inquiry received.</strong></p>
      <ul>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        <li><strong>Email:</strong> ${email || "Not provided"}</li>
        <li><strong>Situation:</strong> ${situation}</li>
        <li><strong>Timeline:</strong> ${timeline}</li>
        <li><strong>Notes:</strong> ${notes || "None"}</li>
        <li><strong>Consent:</strong> ${consentAccepted ? "Granted" : "Pending"}</li>
        <li><strong>Submitted at:</strong> ${submittedAt}</li>
      </ul>
    `,
  };

  try {
    await sgMail.send(message);
  } catch (error) {
    console.error("SendGrid error:", error);
    return respondJson({ ok: false, error: "email_failed" }, 502);
  }

  return respondJson({ ok: true }, 200);
};
