import test from "node:test";
import assert from "node:assert/strict";
import sgMail from "@sendgrid/mail";

// Fake credentials and a stubbed transport: this suite never sends email.
process.env.SENDGRID_API_KEY = "SG.test.test";
process.env.CONTACT_FROM_EMAIL = "site@example.com";
process.env.CONTACT_TO_EMAIL = "owner@example.com";
process.env.CONTACT_REPLY_TO_EMAIL = "reply@example.com";
let messages = [];
sgMail.send = async (message) => {
  messages.push(message);
  return [{ statusCode: 202 }];
};
const { POST, GET } = await import("../src/pages/api/send-email/index.ts");
const valid = () => ({
  address: "123 Example St <Unit A>",
  contact: "seller@example.com",
  contact_preference: "email",
  consent: true,
  form_started_at: String(Date.now() - 5000),
  landing_page: "https://acepropertieskc.com/resources/",
  submission_page: "https://acepropertieskc.com/get-offer/",
  utm_source: "google",
  utm_campaign: "test-campaign",
});
const submit = (body) =>
  POST({
    request: new Request("http://localhost/api/send-email/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  });
test("successful inquiries include original source, submission page, and preference in one notification", async () => {
  const response = await submit(valid());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(messages.length, 1);
  const message = messages[0];
  assert.equal(message.to, "owner@example.com");
  assert.equal(message.from, "site@example.com");
  assert.equal(message.replyTo, "seller@example.com");
  assert.match(message.html, /href="mailto:seller@example.com"/);
  assert.match(message.html, /Preferred contact: Email first/);
  assert.ok(
    message.html.indexOf("Start your follow-up") <
      message.html.indexOf("Property details"),
  );
  assert.match(
    message.text,
    /Landing page: https:\/\/acepropertieskc.com\/resources\//,
  );
  assert.match(
    message.text,
    /Submitted from: https:\/\/acepropertieskc.com\/get-offer\//,
  );
  assert.match(message.text, /Best contact method: email/);
  assert.match(message.text, /UTM campaign: test-campaign/);
  assert.match(message.html, /&lt;Unit A&gt;/);
  assert.equal(response.headers.get("cache-control"), "no-store, private");
});
test("invalid contacts, missing consent, and honeypots do not reach the email transport", async () => {
  const before = messages.length;
  for (const update of [
    { contact: "123" },
    { contact: "bad@" },
    { consent: false },
    { website: "spam" },
    { contact_preference: "text" },
  ]) {
    assert.equal((await submit({ ...valid(), ...update })).status, 422);
  }
  assert.equal(messages.length, before);
});
test("fast submissions are rejected and GET cannot submit a lead", async () => {
  assert.equal(
    (await submit({ ...valid(), form_started_at: String(Date.now()) })).status,
    429,
  );
  assert.equal((await GET({})).status, 405);
});
test("phone-only inquiries retain the business reply address and put texting first when requested", async () => {
  const response = await submit({
    ...valid(),
    contact: "816-555-0123",
    contact_preference: "text",
  });
  assert.equal(response.status, 200);
  const message = messages.at(-1);
  assert.equal(message.replyTo, "reply@example.com");
  assert.match(message.html, /href="tel:\+18165550123"/);
  assert.match(message.html, /href="sms:\+18165550123"/);
  assert.ok(
    message.html.indexOf('href="sms:') < message.html.indexOf('href="tel:'),
  );
  assert.match(message.text, /seller did not provide an email address/);
});

test("contact links encode email tags and preserve phone extensions without offering extension texting", async () => {
  const response = await submit({
    ...valid(),
    contact: "",
    phone: "+1 (816) 555-0123 ext 45",
    email: "seller+house@example.com",
    contact_preference: "call",
  });
  assert.equal(response.status, 200);
  const message = messages.at(-1);
  assert.equal(message.replyTo, "seller+house@example.com");
  assert.match(message.html, /href="mailto:seller%2Bhouse@example.com"/);
  assert.match(message.html, /href="tel:\+18165550123;ext=45"/);
  assert.doesNotMatch(message.html, /href="sms:/);
});

test("transport failure returns an error rather than a false success", async () => {
  sgMail.send = async () => {
    throw new Error("Simulated mail provider outage");
  };
  const originalError = console.error;
  console.error = () => {};
  try {
    const response = await submit(valid());
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), {
      ok: false,
      error: "email_failed",
    });
  } finally {
    console.error = originalError;
  }
});
