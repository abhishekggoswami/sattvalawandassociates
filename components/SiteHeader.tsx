"use client";

import { ArrowDownRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type DropdownItem = string | { label: string; href: string };

const capabilityItems: DropdownItem[] = [
  { label: "Business formation & structuring", href: "/services/business-formation" },
  { label: "Contracts & legal documentation", href: "/services/contracts-documentation" },
  { label: "Board, funding & strategic support", href: "/services/strategic-support" },
];

const incorporationItems: DropdownItem[] = [
  { label: "Private limited companies", href: "/practice-areas/private-limited-company" },
  { label: "Limited liability partnerships", href: "/practice-areas/limited-liability-partnership" },
  { label: "One person companies", href: "/practice-areas/one-person-company" },
  { label: "Section 8 companies", href: "/practice-areas/section-8-company" },
  { label: "Foreign subsidiaries", href: "/practice-areas/foreign-subsidiary" },
];

const practiceItems: DropdownItem[] = [
  { label: "Corporate governance & secretarial matters", href: "/practice-areas/corporate-governance-secretarial-matters" },
  { label: "Commercial contracts & documentation", href: "/practice-areas/commercial-contracts-documentation" },
  { label: "FEMA, FCGPR & FCTRS filings", href: "/practice-areas/fema-fcgpr-fctrs-filings" },
  { label: "Startup, funding & growth advisory", href: "/practice-areas/startup-funding-growth-advisory" },
];

const raPracticeItems: DropdownItem[] = [
  { label: "SEBI registration & compliance setup", href: "/services/sebi-compliance" },
  { label: "SEBI regulatory practice", href: "/practice-areas/sebi-regulatory-practice" },
  { label: "Investment adviser registration", href: "/practice-areas/investment-adviser-registration" },
  { label: "Research analyst registration", href: "/practice-areas/research-analyst-registration" },
  { label: "Audit readiness & regulatory filings", href: "/services/audit-readiness" },
  { label: "Annual and ongoing compliance", href: "/services/annual-compliance" },
  { label: "Registrations & operating licences", href: "/services/registrations-licences" },
];

const standardLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const closeDropdown = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest(".nav-dropdown")) setActiveDropdown(null);
    };
    document.addEventListener("pointerdown", closeDropdown);
    return () => document.removeEventListener("pointerdown", closeDropdown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.documentElement.classList.add("mobile-menu-is-open");
    document.body.classList.add("mobile-menu-is-open");
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.documentElement.classList.remove("mobile-menu-is-open");
      document.body.classList.remove("mobile-menu-is-open");
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return <header className={`site-header ${menuOpen ? "is-mobile-menu-open" : ""}`} id="top">
    <div className="topbar">
      <a className="brand" href="/" aria-label="Sattva Law & Associates home"><span>Sattva</span><small>LAW &amp; ASSOCIATES</small></a>
      <div className="header-actions"><div className="header-phone-links"><a className="phone-link" href="tel:+919832350411" aria-label="Call +91 9832350411">+91 9832350411</a><a className="phone-link" href="tel:+918349997770" aria-label="Call +91 8349997770">+91 8349997770</a></div><a className="nav-cta" href="/contact">Let&apos;s talk</a></div>
    </div>
    <div className="subnav">
      <button className="menu-button" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {standardLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        <HeaderDropdown label="Capabilities" href="/services" items={capabilityItems} active={activeDropdown === "Capabilities"} onOpen={() => setActiveDropdown("Capabilities")} onClose={() => setActiveDropdown(null)} />
        <HeaderDropdown label="Company Incorporation" href="/company-incorporation" items={incorporationItems} active={activeDropdown === "Company Incorporation"} onOpen={() => setActiveDropdown("Company Incorporation")} onClose={() => setActiveDropdown(null)} />
        <HeaderDropdown label="RA Practice" href="/ra-practice" items={raPracticeItems} active={activeDropdown === "RA Practice"} onOpen={() => setActiveDropdown("RA Practice")} onClose={() => setActiveDropdown(null)} />
        <HeaderDropdown label="Practice Areas" href="/practice-areas" items={practiceItems} active={activeDropdown === "Practice Areas"} onOpen={() => setActiveDropdown("Practice Areas")} onClose={() => setActiveDropdown(null)} />
        <a href="/contact">Contact</a>
      </nav>
    </div>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
      {standardLinks.map((link) => <a href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <MobileGroup label="Capabilities" href="/services" items={capabilityItems} onNavigate={() => setMenuOpen(false)} />
      <MobileGroup label="Company Incorporation" href="/company-incorporation" items={incorporationItems} onNavigate={() => setMenuOpen(false)} />
      <MobileGroup label="RA Practice" href="/ra-practice" items={raPracticeItems} onNavigate={() => setMenuOpen(false)} />
      <MobileGroup label="Practice Areas" href="/practice-areas" items={practiceItems} onNavigate={() => setMenuOpen(false)} />
      <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      <a href="/contact" onClick={() => setMenuOpen(false)}>Arrange a conversation</a>
    </nav>}
  </header>;
}

function HeaderDropdown({ label, href, items, active, onOpen, onClose }: { label: string; href: string; items: DropdownItem[]; active: boolean; onOpen: () => void; onClose: () => void }) {
  return <div className={`nav-dropdown ${active ? "is-open" : ""}`} onMouseEnter={onOpen}>
    <div className="nav-dropdown-trigger"><a href={href} onFocus={onOpen}>{label}</a><button type="button" onFocus={onOpen} onClick={onOpen} aria-label={`Open ${label} navigation`} aria-expanded={active}><ChevronDown size={13} /></button></div>
    <div className="nav-dropdown-menu"><p>{label}</p>{items.map((item) => { const itemLabel = typeof item === "string" ? item : item.label; const itemHref = typeof item === "string" ? href : item.href; return <a href={itemHref} key={itemLabel} onClick={onClose}>{itemLabel}</a>; })}</div>
  </div>;
}

function MobileGroup({ label, href, items, onNavigate }: { label: string; href: string; items: DropdownItem[]; onNavigate: () => void }) {
  return <div className="mobile-nav-group"><a href={href} onClick={onNavigate}>{label}</a>{items.map((item) => { const itemLabel = typeof item === "string" ? item : item.label; const itemHref = typeof item === "string" ? href : item.href; return <a className="mobile-sub-link" href={itemHref} key={itemLabel} onClick={onNavigate}>{itemLabel}</a>; })}</div>;
}
