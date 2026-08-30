"use client";

import { useEffect, useState } from "react";

const storageKey = "sattva-disclaimer-acknowledged";

export default function SiteDisclaimer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(storageKey) !== "true") setOpen(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("disclaimer-open", open);
    return () => document.body.classList.remove("disclaimer-open");
  }, [open]);

  const acknowledge = () => {
    window.sessionStorage.setItem(storageKey, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="disclaimer-backdrop" role="presentation">
      <section className="site-disclaimer" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
        <p className="eyebrow">Important information</p>
        <h1 id="disclaimer-title">Before you continue.</h1>
        <div className="disclaimer-rule" />
        <p>This website is made available for general information only. It is not an advertisement, solicitation, invitation or inducement to seek legal services from Sattva Law &amp; Associates.</p>
        <p>Nothing on this website constitutes legal advice, and viewing it or communicating through it does not create a lawyer-client relationship. Legal advice depends on the specific facts and applicable law of a matter.</p>
        <p>Please do not send confidential information unless and until we have confirmed that we can act for you and have agreed the terms of engagement in writing.</p>
        <div className="disclaimer-actions">
          <button type="button" onClick={acknowledge}>I understand <span>↘</span></button>
          <small>By continuing, you acknowledge this information.</small>
        </div>
      </section>
    </div>
  );
}
