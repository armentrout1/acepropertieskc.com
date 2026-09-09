// Inputs have already passed the shared contact validation in the API.
export function notificationContact({
  phone,
  email,
  preference,
  fallbackReplyTo,
}) {
  const preferred =
    {
      text: "Text first",
      call: "Call first",
      email: "Email first",
      any: "Any contact method",
    }[preference.toLowerCase()] || "Any contact method";
  const actions = [];
  if (phone) {
    const extension = phone.match(/(?:ext\.?|x)\s*(\d{1,6})$/i)?.[1];
    const base = phone.split(/\s*(?:ext\.?|x)\s*/i)[0];
    const digits = base.replace(/\D/g, "");
    const dial =
      digits.length === 10
        ? `+1${digits}`
        : `${base.trim().startsWith("+") ? "+" : ""}${digits}`;
    actions.push({
      method: "call",
      label: "Call seller",
      href: `tel:${dial}${extension ? `;ext=${extension}` : ""}`,
    });
    if (!extension)
      actions.push({
        method: "text",
        label: "Text seller",
        href: `sms:${dial}`,
      });
  }
  if (email) {
    actions.push({
      method: "email",
      label: "Email seller",
      href: `mailto:${email.split("@").map(encodeURIComponent).join("@")}`,
    });
  }
  actions.sort(
    (a, b) => Number(b.method === preference) - Number(a.method === preference),
  );
  return { preferred, actions, replyTo: email || fallbackReplyTo };
}
