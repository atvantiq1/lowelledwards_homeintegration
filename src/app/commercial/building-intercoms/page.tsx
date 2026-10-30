import CommercialServicePage, {
  commercialMetadata,
} from "@/components/commercial/CommercialServicePage";
import { getCommercialService } from "@/lib/commercial";

const service = getCommercialService("building-intercoms");

export const metadata = commercialMetadata(service);

export default function BuildingIntercomsPage() {
  return <CommercialServicePage service={service} />;
}
