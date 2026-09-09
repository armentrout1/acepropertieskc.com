import { captureAttribution } from "../lib/lead-attribution.js";
import { validateLeadContact } from "../lib/lead-contact.js";

let storage;
try {
  storage = window.sessionStorage;
} catch {}
const attribution = captureAttribution({
  href: window.location.href,
  referrer: document.referrer,
  storage,
});

document.querySelectorAll("form[data-offer-form]").forEach(function (form) {
  if (form.dataset.offerFormBound === "true") {
    return;
  }
  form.dataset.offerFormBound = "true";

  const trackingFormId = form.dataset.formTrackingId || form.id;
  const errorBanner = form.querySelector("[data-error]");
  const submitButton = form.querySelector('button[type="submit"]');
  const submitButtonText = submitButton ? submitButton.textContent : "";
  const startField = form.querySelector('input[name="form_started_at"]');
  const addressFirst = form.dataset.addressFirst === "true";
  const impliedConsent = form.dataset.impliedConsent === "true";
  const addressNextButton = form.querySelector("[data-address-next]");
  const addressNextPanel = form.querySelector("[data-address-next-panel]");
  const deliveryFallbackMessage =
    "The form could not send right now. Please call or text 816-728-7548, or email info@acepropertieskc.com.";

  if (startField) {
    startField.value = Date.now().toString();
  }

  Object.entries({
    ...attribution,
    submission_page: window.location.origin + window.location.pathname,
  }).forEach(([fieldName, value]) => {
    const field = form.querySelector(`input[name="${fieldName}"]`);
    if (field) field.value = value;
  });

  let submitInFlight = false;
  let submissionComplete = false;
  let formStartedTracked = false;
  const trackFormEvent = (eventName, payload = {}, googleOptions = {}) => {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          form_id: trackingFormId,
          page_path: window.location.pathname,
          page_title: document.title,
          ...payload,
          ...googleOptions,
        });

        const googleAdsSendTo =
          eventName === "generate_lead"
            ? window.__aceGoogleAdsConversions?.lead
            : "";

        if (googleAdsSendTo) {
          window.gtag("event", "conversion", {
            send_to: googleAdsSendTo,
            form_id: trackingFormId,
            page_path: window.location.pathname,
            lead_type: payload.lead_type || "offer_form",
          });
        }
      }

      if (typeof window.fbq === "function") {
        const metaPayload = {
          content_name: trackingFormId,
          page_path: window.location.pathname,
          page_title: document.title,
          ...payload,
        };

        if (eventName === "generate_lead") {
          window.fbq("track", "Lead", metaPayload);
        } else if (eventName === "form_start") {
          window.fbq("track", "Contact", {
            contact_method: "form",
            ...metaPayload,
          });
        } else {
          window.fbq("trackCustom", `ace_${eventName}`, metaPayload);
        }
      }
    } catch {
      /* Analytics availability must not affect form submission. */
    }
  };

  form.addEventListener("focusin", function () {
    if (formStartedTracked) {
      return;
    }

    formStartedTracked = true;
    trackFormEvent("form_start");
  });

  if (addressFirst && addressNextButton && addressNextPanel) {
    addressNextButton.addEventListener("click", function () {
      const addressInput = form.querySelector('input[name="address"]');
      const address = addressInput ? addressInput.value.trim() : "";

      if (!address) {
        trackFormEvent("form_validation_error", {
          error_count: 1,
          step: "address_first",
        });

        if (errorBanner) {
          errorBanner.textContent = "Please provide the property address.";
          errorBanner.classList.remove("hidden");
        }

        if (addressInput) {
          addressInput.setAttribute("aria-invalid", "true");
          addressInput.focus();
        }
        return;
      }

      if (addressInput) {
        addressInput.removeAttribute("aria-invalid");
      }
      if (errorBanner) {
        errorBanner.classList.add("hidden");
        errorBanner.textContent = "";
      }

      if (addressNextPanel.classList.contains("hidden")) {
        trackFormEvent("form_step_complete", {
          step: "address",
          next_step: "contact",
        });
      }
      addressNextPanel.classList.remove("hidden");
      addressNextButton.classList.add("hidden");
      form.querySelector('input[name="contact"]')?.focus();
    });
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (submitInFlight || submissionComplete) return;
    if (addressFirst && addressNextPanel?.classList.contains("hidden")) {
      addressNextButton?.click();
      return;
    }

    const formData = new FormData(form);
    const errors = [];

    const address = (formData.get("address") || "").toString().trim();
    const contactResult = validateLeadContact(Object.fromEntries(formData));
    const addressInput = form.querySelector('input[name="address"]');
    const contactInput = form.querySelector('input[name="contact"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');
    const preferenceInput = form.querySelector('[name="contact_preference"]');
    const consentInput = form.querySelector('input[name="consent"]');
    const consentChecked =
      impliedConsent ||
      (consentInput
        ? consentInput.getAttribute("value") === "true" || consentInput.checked
        : false);
    const invalidFields = [];

    [
      addressInput,
      contactInput,
      phoneInput,
      emailInput,
      consentInput,
      preferenceInput,
    ].forEach((field) => {
      if (field) {
        field.removeAttribute("aria-invalid");
      }
    });

    if (!address) {
      errors.push("Please provide the property address.");
      if (addressInput) {
        invalidFields.push(addressInput);
      }
    }

    if (!consentChecked) {
      errors.push("Consent is required to continue.");
      if (consentInput) {
        invalidFields.push(consentInput);
      }
    }

    Object.entries(contactResult.errors).forEach(([fieldName, message]) => {
      errors.push(message);
      const field = form.elements.namedItem(fieldName);
      if (field) invalidFields.push(field);
    });

    if (errors.length > 0) {
      trackFormEvent("form_validation_error", {
        error_count: errors.length,
      });

      if (errorBanner) {
        errorBanner.textContent = errors.join(" ");
        errorBanner.classList.remove("hidden");
      }
      invalidFields.forEach((field) =>
        field.setAttribute("aria-invalid", "true"),
      );
      invalidFields[0]?.focus();
      return;
    }

    if (errorBanner) {
      errorBanner.classList.add("hidden");
      errorBanner.textContent = "";
    }

    const payload = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload[key] = value;
      }
    });

    payload.phone = contactResult.phone;
    payload.email = contactResult.email;

    payload.consent = consentChecked;
    if (startField && typeof payload.form_started_at !== "string") {
      payload.form_started_at = startField.value;
    }

    submitInFlight = true;
    // Submit form to API
    let submitErrorTracked = false;
    const trackSubmitError = (errorType) => {
      submitErrorTracked = true;
      trackFormEvent("form_submit_error", {
        error_type: errorType,
      });
    };

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      const response = await fetch("/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (response.ok && result?.ok === true) {
        submissionComplete = true;
        // Let Google process the conversion before navigation unloads this page.
        // The independent timeout also covers blocked or unavailable analytics.
        await new Promise((resolve) => {
          const timeoutId = window.setTimeout(resolve, 1500);
          const finishTracking = () => {
            window.clearTimeout(timeoutId);
            resolve();
          };

          trackFormEvent(
            "generate_lead",
            { lead_type: "offer_form" },
            { event_callback: finishTracking, event_timeout: 1500 },
          );
          if (typeof window.gtag !== "function") finishTracking();
        });

        // Success - redirect to thank you page
        window.location.href = "/thank-you/";
      } else {
        console.error("Form submit failed", response.status, result);

        if (result?.error === "validation_error" && result.fields) {
          trackSubmitError("validation_error");
          throw new Error(Object.values(result.fields).join(" "));
        }

        if (result?.error === "rate_limited") {
          trackSubmitError("rate_limited");
          throw new Error("Please wait a moment and try submitting again.");
        }

        if (
          result?.error === "email_disabled" ||
          result?.error === "email_failed"
        ) {
          trackSubmitError(result.error);
          throw new Error(deliveryFallbackMessage);
        }

        trackSubmitError("unknown_response");
        throw new Error(deliveryFallbackMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (!submitErrorTracked) {
        trackSubmitError("submit_exception");
      }
      if (errorBanner) {
        errorBanner.textContent =
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.";
        errorBanner.classList.remove("hidden");
      }
    } finally {
      submitInFlight = false;
      if (submitButton && !submissionComplete) {
        submitButton.disabled = false;
        submitButton.textContent = submitButtonText;
      }
    }
  });
});
