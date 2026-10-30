import CommercialServicePage, {
  commercialMetadata,
} from "@/components/commercial/CommercialServicePage";
import { getCommercialService } from "@/lib/commercial";

const service = getCommercialService("access-control");

export const metadata = commercialMetadata(service);

export default function AccessControlPage() {
  return <CommercialServicePage service={service} />;
}
