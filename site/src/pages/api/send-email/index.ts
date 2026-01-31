import type { APIRoute } from "astro";

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

  console.log("Validated submission received:", { address, phone, email });
  return respondJson({ ok: true }, 200);
};
