export default function SiteFooter() {
  return <footer className="image-footer site-footer" id="contact">
    <div className="shell footer-main">
      <div className="footer-brand">
        <a className="brand" href="/"><span>Sattva</span><small>LAW &amp; ASSOCIATES</small></a>
        <h2>Clear counsel for<br /><em>the next step.</em></h2>
        <p>Business law, corporate governance and regulatory support for the work ahead.</p>
      </div>
      <div className="footer-contact">
        <p className="footer-label">CONTACT</p>
        <a href="mailto:sattvalawandassociates@gmail.com">sattvalawandassociates@gmail.com</a>
        <a href="tel:+919832350411">+91 9832350411</a>
        <a href="tel:+918349997770">+91 8349997770</a>
        <span className="footer-location">India</span>
      </div>
      <div className="footer-navigation">
        <div className="footer-nav-group">
          <p className="footer-label">COMPANY INCORPORATION</p>
          <a href="/practice-areas/private-limited-company">Private limited companies</a>
          <a href="/practice-areas/limited-liability-partnership">Limited liability partnerships</a>
          <a href="/practice-areas/one-person-company">One person companies</a>
          <a href="/practice-areas/section-8-company">Section 8 companies</a>
          <a href="/practice-areas/foreign-subsidiary">Foreign subsidiaries</a>
        </div>
        <div className="footer-nav-group">
          <p className="footer-label">RA PRACTICE</p>
          <a href="/ra-practice">IA / RA registration</a>
          <a href="/services/sebi-compliance">SEBI compliance setup</a>
          <a href="/practice-areas/sebi-regulatory-practice">SEBI regulatory practice</a>
          <a href="/practice-areas/research-analyst-registration">Research analyst registration</a>
          <a href="/practice-areas/investment-adviser-registration">Investment adviser registration</a>
          <a href="/services/audit-readiness">Audit readiness &amp; filings</a>
          <a href="/services/annual-compliance">Annual compliance</a>
          <a href="/services/registrations-licences">Registrations &amp; licences</a>
        </div>
        <div className="footer-nav-group">
          <p className="footer-label">PRACTICE AREAS</p>
          <a href="/practice-areas/corporate-governance-secretarial-matters">Corporate governance</a>
          <a href="/practice-areas/commercial-contracts-documentation">Commercial contracts</a>
          <a href="/practice-areas/fema-fcgpr-fctrs-filings">FEMA &amp; foreign investment</a>
        </div>
        <div className="footer-nav-group">
          <p className="footer-label">EXPLORE</p>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/services">Capabilities</a>
          <a href="/practice-areas">Practice areas</a>
          <a href="/blog">Notes from the practice</a>
          <a href="/testimonials">Client testimonials</a>
        </div>
      </div>
    </div>
    <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Sattva Law &amp; Associates. All rights reserved.</p><div><a href="/contact">Contact</a><span>Legal &amp; compliance counsel</span></div></div>
  </footer>;
}
