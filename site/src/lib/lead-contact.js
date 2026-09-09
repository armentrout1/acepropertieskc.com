// Shared by the browser and API. Syntax checks cannot prove that a contact is reachable.
export function validateLeadContact(input) {
  const value = (key) =>
    typeof input[key] === "string" ? input[key].trim() : "";
  const contact = value("contact");
  let phone = value("phone");
  let email = value("email");
  const usesCombinedContact = !phone && !email && Boolean(contact);
  if (usesCombinedContact) {
    if (contact.includes("@")) email = contact;
    else phone = contact;
  }
  const errors = {};
  if (!phone && !email)
    errors[Object.hasOwn(input, "contact") ? "contact" : "phone"] =
      "Share a phone number or email so we can reach you.";
  if (
    email &&
    (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  ) {
    errors[usesCombinedContact ? "contact" : "email"] =
      "Enter a complete email address, such as name@example.com.";
  }
  const phoneNumber = phone.split(/\s*(?:ext\.?|x)\s*/i)[0];
  const digits = phoneNumber.replace(/\D/g, "");
  if (
    phone &&
    (!/^\+?[\d\s().-]+(?:\s*(?:ext\.?|x)\s*\d{1,6})?$/i.test(phone) ||
      digits.length < 10 ||
      digits.length > 15)
  ) {
    errors[usesCombinedContact ? "contact" : "phone"] =
      "Enter a phone number with an area code, such as 816-555-0123.";
  }
  const preference = value("contact_preference").toLowerCase();
  if (preference === "email" && !email) {
    errors.contact_preference =
      "To choose email, enter an email address or change your contact preference.";
  } else if (["call", "text"].includes(preference) && !phone) {
    errors.contact_preference =
      "To choose a call or text, enter a phone number or change your contact preference.";
  }
  return { phone, email, errors };
}
