import type { Metadata } from "next";
import SecurityHero from "@/components/residential/security/SecurityHero";
import SecurityIntro from "@/components/residential/security/SecurityIntro";
import ResidentialSecurity from "@/components/residential/security/ResidentialSecurity";
import SecurityCoverage from "@/components/residential/security/SecurityCoverage";
import ConnectedSecurity from "@/components/residential/security/ConnectedSecurity";
import SecurityPlanning from "@/components/residential/security/SecurityPlanning";
import SecurityCTA from "@/components/residential/security/SecurityCTA";

const description =
  "Residential security from Lowell Edwards Home Integration: video surveillance, intercom and entry systems and smart locks, planned around your home and integrated with the rest of its technology.";

export const metadata: Metadata = {
  title: "Security",
  description,
  openGraph: {
    title: "Security | Lowell Edwards Home Integration",
    description,
    type: "website",
  },
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityIntro />
      <ResidentialSecurity />
      <ConnectedSecurity />
      <SecurityPlanning />
      <SecurityCTA />
    </>
  );
}
