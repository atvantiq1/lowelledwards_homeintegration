import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ConsultationForm from "@/components/contact/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a complimentary in-home consultation with Lowell Edwards Home Integration, or reach our Hackensack, NJ team directly by phone or email.",
  openGraph: {
    title: "Contact | Lowell Edwards Home Integration",
    description:
      "Request a complimentary in-home consultation with Lowell Edwards Home Integration, or reach our Hackensack, NJ team directly by phone or email.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ConsultationForm />
    </>
  );
}
