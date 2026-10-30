import CommercialServicePage, {
  commercialMetadata,
} from "@/components/commercial/CommercialServicePage";
import { getCommercialService } from "@/lib/commercial";

const service = getCommercialService("safety-systems");

export const metadata = commercialMetadata(service);

export default function SafetySystemsPage() {
  return <CommercialServicePage service={service} />;
}
