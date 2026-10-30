import type { Metadata } from "next";
import CommercialHero from "@/components/commercial/CommercialHero";
import CommercialIntro from "@/components/commercial/CommercialIntro";
import CommercialFeatures from "@/components/commercial/CommercialFeatures";
import CommercialProcess from "@/components/commercial/CommercialProcess";
import CommercialCTA from "@/components/commercial/CommercialCTA";
import type { CommercialService } from "@/lib/commercial";

export function commercialMetadata(service: CommercialService): Metadata {
  return {
    title: service.label,
    description: service.metaDescription,
    openGraph: {
      title: `${service.label} | Lowell Edwards Home Integration`,
      description: service.metaDescription,
      type: "website",
    },
  };
}

export default function CommercialServicePage({ service }: { service: CommercialService }) {
  return (
    <>
      <CommercialHero service={service} />
      <CommercialIntro service={service} />
      <CommercialFeatures service={service} />
      <CommercialProcess service={service} />
      <CommercialCTA service={service} />
    </>
  );
}
