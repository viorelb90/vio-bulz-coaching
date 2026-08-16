document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.VIO_CONFIG || { payments: {} };

  document.querySelectorAll("[data-payment]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const key = btn.dataset.payment;
      const link = cfg.payments && cfg.payments[key];

      if (link && !link.includes("PASTE_STRIPE_LINK")) {
        e.preventDefault();
        window.location.href = link;
      }
    });
  });

  // Onboarding: if a package was selected from the landing page, keep it in the URL.
  const params = new URLSearchParams(window.location.search);
  const selected = params.get("package");
  if (selected) {
    const select = document.querySelector("#package");
    if (select) select.value = selected;
  }
});
