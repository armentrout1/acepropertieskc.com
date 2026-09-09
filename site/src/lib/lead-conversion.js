const KEY = "ace_confirmed_lead_v1";
const MAX_AGE = 10 * 60 * 1000;

export function saveLeadConversion(storage, event, now = Date.now()) {
  try {
    if (!storage) return false;
    // Store event context only, never a seller's address or contact details.
    storage.setItem(
      KEY,
      JSON.stringify({
        createdAt: now,
        form_id: event.form_id,
        page_path: event.page_path,
        page_title: event.page_title,
        lead_type: "offer_form",
      }),
    );
    return true;
  } catch {
    return false;
  }
}

export function consumeLeadConversion(storage, now = Date.now()) {
  try {
    const raw = storage?.getItem(KEY);
    if (!raw) return null;
    // A refresh or a second visit must not count the same inquiry again.
    storage.removeItem(KEY);
    const event = JSON.parse(raw);
    const age = now - event.createdAt;
    if (
      !Number.isFinite(event.createdAt) ||
      age < 0 ||
      age > MAX_AGE ||
      typeof event.form_id !== "string" ||
      !event.form_id ||
      typeof event.page_path !== "string" ||
      !event.page_path.startsWith("/") ||
      typeof event.page_title !== "string"
    )
      return null;
    return {
      form_id: event.form_id,
      page_path: event.page_path,
      page_title: event.page_title,
      lead_type: "offer_form",
    };
  } catch {
    return null;
  }
}
