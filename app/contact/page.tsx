"use client";

import { ArrowDownRight, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const contactEmail = "sattvalawandassociates@gmail.com";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const sendEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "General enquiry");
    const message = String(form.get("message") || "");
    const body = [
      "New website enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`Website enquiry: ${subject}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main>
      <SiteHeader />
      <section className="hero contact-hero" aria-labelledby="contact-title">
        <div className="hero-slide is-active" style={{ backgroundImage: "url('/images/sattva/contact-hero.jpg')" }} />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-copy-set contact-hero-copy">
            <p className="eyebrow light"><em>Contact Sattva</em> <i /> Sattva Law &amp; Associates</p>
            <h1 id="contact-title">Begin with a<br /><em>clear conversation.</em></h1>
            <div className="hero-actions"><a className="button button-light" href="#enquiry">Send an enquiry <ArrowDownRight size={16} /></a></div>
          </div>
        </div>
        <div className="hero-rail">LEGAL &amp; COMPLIANCE COUNSEL</div>
      </section>

      <section className="contact-page-content shell" id="enquiry">
        <div className="contact-page-intro">
          <p className="eyebrow">Contact details</p>
          <h2>Let&apos;s make the<br /><em>next step clear.</em></h2>
          <p>Please share a short outline of your requirement. We will review it and respond with the appropriate next step.</p>
          <div className="contact-detail-list">
            <a href={`mailto:${contactEmail}`}><Mail size={18} /><span><small>Email</small>{contactEmail}</span></a>
            <a href="tel:+919832350411"><Phone size={18} /><span><small>Phone</small>+91 9832350411</span></a>
            <a href="tel:+918349997770"><Phone size={18} /><span><small>Alternate phone</small>+91 83499 97770</span></a>
          </div>
          <p className="contact-page-note">Please do not include confidential or sensitive information before we have confirmed that we can act for you.</p>
        </div>

        <form className="contact-page-form" onSubmit={sendEnquiry}>
          <p className="eyebrow">Send an enquiry</p>
          <div className="contact-page-fields">
            <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="Enter your email address" /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" /></label>
            <label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label>
          </div>
          <label>Message<textarea name="message" required rows={6} placeholder="Share a brief outline of your requirement" /></label>
          <div className="contact-page-form-footer">
            <button className="button button-dark" type="submit">{sent ? "Opening your email client" : "Send enquiry"} <ArrowDownRight size={16} /></button>
            <p>Your default email application will open with your enquiry details prepared for review.</p>
          </div>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
