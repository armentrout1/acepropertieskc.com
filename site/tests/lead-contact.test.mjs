import test from "node:test";
import assert from "node:assert/strict";
import { validateLeadContact } from "../src/lib/lead-contact.js";
test("accepts common phone formats and complete email addresses", () => {
  for (const contact of [
    "816-555-0123",
    "+1 (816) 555-0123",
    "+44 20 7946 0958",
    "8165550123 ext 12",
    "seller+house@example.com",
  ]) {
    assert.deepEqual(validateLeadContact({ contact }).errors, {}, contact);
  }
});
test("rejects incomplete contacts with the correct field for inline feedback", () => {
  for (const contact of [
    "",
    "hello",
    "123",
    "name@",
    "name@example",
    "a\nb@example.com",
  ]) {
    assert.ok(validateLeadContact({ contact }).errors.contact, contact);
  }
  assert.ok(validateLeadContact({ phone: "", email: "" }).errors.phone);
  assert.ok(validateLeadContact({ email: "broken" }).errors.email);
  assert.ok(validateLeadContact({ phone: "bad" }).errors.phone);
});
test("checks that the chosen contact method is available", () => {
  assert.ok(
    validateLeadContact({
      contact: "seller@example.com",
      contact_preference: "text",
    }).errors.contact_preference,
  );
  assert.ok(
    validateLeadContact({ contact: "8165550123", contact_preference: "email" })
      .errors.contact_preference,
  );
  assert.deepEqual(
    validateLeadContact({
      phone: "8165550123",
      email: "seller@example.com",
      contact_preference: "email",
    }).errors,
    {},
  );
});
