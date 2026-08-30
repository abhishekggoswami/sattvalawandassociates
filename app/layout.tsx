import type { Metadata } from "next";
import "./globals.css";
import SiteDisclaimer from "../components/SiteDisclaimer";

export const metadata: Metadata = {
  title: "Sattva Law & Associates | Legal & Compliance Counsel",
  description: "Considered legal, regulatory and compliance support for businesses building with intention.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteDisclaimer />{children}</body>
    </html>
  );
}
