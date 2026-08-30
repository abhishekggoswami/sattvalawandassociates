export default function SiteFooter() {
  return <footer className="image-footer site-footer" id="contact">
    <div className="shell footer-main">
      <div className="footer-brand">
        <a className="brand" href="/"><span>Sattva</span><small>LAW &amp; ASSOCIATES</small></a>
        <h2>Clear counsel for<br /><em>the next step.</em></h2>
        <p>Business law, corporate governance and regulatory support for the work ahead.</p>
      </div>
      <div>
        <p className="footer-label">CONTACT</p>
        <a href="mailto:sattvalawandassociates@gmail.com">sattvalawandassociates@gmail.com</a>
        <a href="tel:+919832350411">+91 9832350411</a>
        <a href="tel:+918349997770">+91 83499 97770</a>
        <span className="footer-location">India</span>
      </div>
      <div>
        <p className="footer-label">EXPLORE</p>
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/services">Capabilities</a>
        <a href="/#expertise">Practice areas</a>
        <a href="/blog">Notes from the practice</a>
        <a href="/testimonials">Client testimonials</a>
      </div>
      <div>
        <p className="footer-label">PRACTICE AREAS</p>
        <a href="/practice-areas/corporate-governance-secretarial-matters">Corporate governance</a>
        <a href="/practice-areas/commercial-contracts-documentation">Commercial contracts</a>
        <a href="/practice-areas/sebi-regulatory-practice">SEBI regulatory practice</a>
        <a href="/practice-areas/fema-fcgpr-fctrs-filings">FEMA &amp; foreign investment</a>
      </div>
    </div>
    <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Sattva Law &amp; Associates. All rights reserved.</p><div><a href="/contact">Contact</a><span>Legal &amp; compliance counsel</span></div></div>
  </footer>;
}
