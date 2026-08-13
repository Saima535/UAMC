import { LandingPageHeader } from "./landing-page-header";

// Keep the legacy export name so existing pages can share the same header
// without needing separate implementations.
export function SiteHeader() {
  return <LandingPageHeader />;
}
