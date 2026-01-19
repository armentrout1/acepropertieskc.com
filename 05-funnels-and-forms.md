# Funnels & forms

## Funnel goals
Convert mobile visitors into:
- phone calls
- text conversations
- form submissions

## Funnel pages (v1)
### 1) Cash offer funnel
- URL: `/get-offer/`
- Primary CTA: “Get My Offer”

**Form structure (2-step recommended):**
- Step 1 (fast):
  - Property address (or city + ZIP if they hesitate)
  - Property type (single-family, duplex, triplex, fourplex)
- Step 2:
  - Condition: (great / ok / needs work / heavy repairs)
  - Timeline: (ASAP / 2–4 weeks / 1–3 months / just exploring)
  - Name
  - Phone
  - Optional: email
  - Consent checkbox (if texting)

### 2) Creative options funnel
- URL: `/options/`
- Primary CTA: “Explore Options”

**Form fields:**
- Property address
- Brief situation (short textarea)
- Name
- Phone
- Consent checkbox (if texting)

## Sticky mobile CTA bar
Always present on mobile:
- Call
- Text
- Get Offer

Rules:
- Use a phone link (`tel:`)
- Use SMS link (`sms:`) for text

## Thank-you page
URL: `/thank-you/`
Include:
- Confirmation message
- What happens next (timeline)
- A secondary CTA: “Call now if you want to talk today”

## Lead routing requirements
Minimum viable:
- Send form submission to:
  - your email inbox, and/or
  - a CRM webhook

Recommended:
- Autoresponder email or SMS acknowledging receipt

## Consent and compliance
If you text leads:
- Provide an explicit checkbox stating they agree to receive texts.
- Include a short note about message frequency + “message/data rates may apply.”

(Exact wording depends on your SMS provider and legal counsel.)
