import CommercialServicePage, {
  commercialMetadata,
} from "@/components/commercial/CommercialServicePage";
import { getCommercialService } from "@/lib/commercial";

const service = getCommercialService("video-security");

export const metadata = commercialMetadata(service);

export default function VideoSecurityPage() {
  return <CommercialServicePage service={service} />;
}
