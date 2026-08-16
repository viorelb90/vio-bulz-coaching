// VIO BULZ COACHING — CONFIGURARE
// 1) Pune aici linkurile Stripe reale când le ai.
// 2) Nu modifica restul site-ului.
// 3) După ce pui linkurile, butoanele "ALEGE PACHET" vor merge direct la plată.

const VIO_CONFIG = {
  payments: {
    basic: "PASTE_STRIPE_LINK_BASIC_HERE",
    transform: "PASTE_STRIPE_LINK_TRANSFORM_HERE",
    premium: "PASTE_STRIPE_LINK_PREMIUM_HERE",
    transform3: "PASTE_STRIPE_LINK_TRANSFORM_3_LUNI_HERE",
    guide: "PASTE_STRIPE_LINK_GHID_55_LEI_HERE"
  },

  // Formularul poate fi conectat ulterior la Formspree/FormSubmit/Wix Forms.
  // Pentru moment, onboarding-ul funcționează ca pagină statică și validează datele.
  formEndpoint: ""
};
