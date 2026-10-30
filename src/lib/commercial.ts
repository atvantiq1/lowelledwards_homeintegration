import { commercialImages } from "@/lib/images";

/**
 * Content for the four Commercial service pages. Each page renders the same
 * section components (src/components/commercial) from one entry here, so
 * adding or editing a commercial service only touches this file.
 */

interface CommercialImage {
  src: string;
  alt: string;
  /** CSS object-position, when the subject isn't centered. */
  position?: string;
}

export interface CommercialService {
  slug: string;
  label: string;
  /** Short line under the label in the navigation menu. */
  navDescription: string;
  metaDescription: string;
  images: Record<"hero" | "intro" | "feature" | "cta", CommercialImage>;
  hero: { title: string; text: string };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
    elements: readonly string[];
  };
  features: {
    eyebrow: string;
    title: string;
    text: string;
    items: readonly { label: string; text: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: readonly { label: string; text: string }[];
  };
  cta: { title: string; text: string };
}

export const commercialServices = [
  {
    slug: "building-intercoms",
    label: "Building Intercoms",
    navDescription: "Video entry for every door.",
    metaDescription:
      "Building intercom and video entry systems from Lowell Edwards for apartment buildings, luxury residences and offices across Northern New Jersey and the New York metro area, with Akuvox, ButterflyMX and DoorBird.",
    images: commercialImages.buildingIntercoms,
    hero: {
      title: "A Better Welcome At Every Entrance.",
      text: "Video intercom and entry systems for apartment buildings, luxury residences and offices across Northern New Jersey and the New York metro area, so residents can see who is at the door and let the right people in from anywhere.",
    },
    intro: {
      eyebrow: "Building Intercoms",
      title: "Modern entry for multi-tenant buildings.",
      text: "Lowell Edwards installs lobby panels and tenant stations properly, with HD video, a tenant directory and call routing, and cable runs concealed for a clean finish. Since 2019 the team has specialized in intercom and access for buildings in Hoboken, Jersey City, North Bergen, Union City, Weehawken and beyond.",
      elements: [
        "Lobby panels & tenant stations",
        "Mobile app & in-unit answering",
        "Delivery & guest codes",
      ],
    },
    features: {
      eyebrow: "What We Install",
      title: "One system for entry, delivery and daily control.",
      text: "Each building is matched to the platform that suits it, with indoor and outdoor stations built for daily use in multifamily, mixed-use and managed-access properties.",
      items: [
        {
          label: "Akuvox",
          text: "AI-powered SIP intercoms with face recognition entry, plus app, fob, PIN, Bluetooth and landline access, for small and large residential buildings.",
        },
        {
          label: "ButterflyMX",
          text: "Cloud-managed smartphone video entry built for residential buildings, with app, fob, PIN and landline access.",
        },
        {
          label: "DoorBird",
          text: "Premium German stainless-steel IP door stations with a 1080p wide-angle camera and night vision.",
        },
        {
          label: "Deliveries & guests",
          text: "Delivery PIN or QR codes and auto-expiring guest and contractor codes, with a time-stamped record of every entry. Residents without a smartphone can answer on a standard phone line.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "From outdated buzzer to modern entry.",
      steps: [
        {
          label: "Survey",
          text: "Map the entrances, existing wiring and requirements with the owner or managing agent.",
        },
        {
          label: "Design",
          text: "Design the system and select the intercom platform that fits the building.",
        },
        {
          label: "Install",
          text: "Install in phases, entrance by entrance, and get residents set up.",
        },
        {
          label: "Support",
          text: "Provide ongoing support, remote monitoring and reporting.",
        },
      ],
    },
    cta: {
      title: "Ready To Upgrade Your Building's Entry?",
      text: "Talk with Lowell Edwards about the entrances and residents at your property.",
    },
  },
  {
    slug: "access-control",
    label: "Access Control",
    navDescription: "Secure doors, simple credentials.",
    metaDescription:
      "Access control from Lowell Edwards: card, fob, PIN and mobile credentials for side doors, garages, gates and amenity spaces in buildings across Northern New Jersey and the New York metro area.",
    images: commercialImages.accessControl,
    hero: {
      title: "The Right People, The Right Doors.",
      text: "Card, fob, PIN and mobile access for side doors, garages, gates and amenity spaces, managed from one place alongside the building intercom.",
    },
    intro: {
      eyebrow: "Access Control",
      title: "Control every door from one place.",
      text: "Lowell Edwards extends secure access beyond the main entrance, to side doors, garage gates and amenity spaces, so property managers can grant, change and revoke credentials remotely instead of re-keying locks.",
      elements: [
        "Card, fob & PIN entry",
        "Mobile credentials",
        "Remote entry & visitor logs",
      ],
    },
    features: {
      eyebrow: "What We Install",
      title: "Secondary doors, gates and shared spaces.",
      text: "Readers and controllers are chosen to work with the building's intercom platform, so every door is managed the same way.",
      items: [
        {
          label: "Readers & credentials",
          text: "Card and fob readers, keypad and PIN entry, Bluetooth and mobile credentials, and face recognition where a building calls for it.",
        },
        {
          label: "Door hardware",
          text: "Quiet electric strikes and maglocks for main-entry release, side doors and garage access.",
        },
        {
          label: "Matched platforms",
          text: "Akuvox multi-modal readers, ButterflyMX's cloud access platform or DoorBird's encrypted I/O controllers, matched to the intercom.",
        },
        {
          label: "Building-wide management",
          text: "Multi-entrance configuration, property-manager dashboards, camera integration, and remote entry and visitor logs.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "Planned around your building.",
      steps: [
        {
          label: "Survey",
          text: "Review the doors, gates, users and access needs with the owner or property manager.",
        },
        {
          label: "Design",
          text: "Choose readers, hardware and the platform that fits the building and its intercom.",
        },
        {
          label: "Install",
          text: "Install and set up credentials with minimal disruption to residents and tenants.",
        },
        {
          label: "Support",
          text: "Support the system remotely and keep permissions and entry logs up to date.",
        },
      ],
    },
    cta: {
      title: "Let's Secure Your Property's Doors.",
      text: "Talk with Lowell Edwards about the doors and people your building needs to manage.",
    },
  },
  {
    slug: "video-security",
    label: "Video Security",
    navDescription: "Cameras that see what matters.",
    metaDescription:
      "Commercial video security and surveillance from Lowell Edwards: HD cameras, recording and remote viewing for buildings and businesses across New Jersey and the tri-state area.",
    images: commercialImages.videoSecurity,
    hero: {
      title: "Clear Eyes On Your Property.",
      text: "Professionally designed camera systems for lobbies, garages, perimeters and common areas, with recordings you can find quickly and view from anywhere.",
    },
    intro: {
      eyebrow: "Video Security",
      title: "Surveillance planned, not just mounted.",
      text: "Lowell Edwards places every camera with purpose, covering entrances, parking and shared spaces while keeping the hardware discreet against the building's architecture.",
      elements: [
        "HD & low-light cameras",
        "Secure recording",
        "Remote & mobile viewing",
      ],
    },
    features: {
      eyebrow: "What We Install",
      title: "Coverage you can rely on.",
      text: "Systems are scaled to the property and designed so the footage is there, and easy to find, when it is needed.",
      items: [
        {
          label: "Cameras",
          text: "Indoor and outdoor dome, bullet and turret cameras with clear day and night images.",
        },
        {
          label: "Recording",
          text: "Network video recorders sized for the retention a building needs, with fast search by time and camera.",
        },
        {
          label: "Remote access",
          text: "Live and recorded video on a phone, tablet or the management office monitor.",
        },
        {
          label: "Connected systems",
          text: "Linked with intercoms and access control so every entry event has video to go with it.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "The right view starts with the right plan.",
      steps: [
        {
          label: "Survey",
          text: "Identify the areas that matter most, from entrances and garages to mailrooms and perimeters.",
        },
        {
          label: "Design & Install",
          text: "Choose camera types and positions, then install and aim each one for the clearest view.",
        },
        {
          label: "Support",
          text: "Set up viewing for the people who need it and keep the system maintained over time.",
        },
      ],
    },
    cta: {
      title: "See Your Property More Clearly.",
      text: "Talk with Lowell Edwards about video security for your building or business.",
    },
  },
  {
    slug: "safety-systems",
    label: "Safety Systems",
    navDescription: "Protection for people and property.",
    metaDescription:
      "Safety systems from Lowell Edwards for commercial and multi-family buildings, including detection, alerts and monitoring integrated with entry and video security.",
    images: commercialImages.safetySystems,
    hero: {
      title: "Safety Built Into The Building.",
      text: "Detection, alerts and monitoring that help protect the people inside a building, planned alongside its entry, access and video systems.",
    },
    intro: {
      eyebrow: "Safety Systems",
      title: "Protection that works quietly in the background.",
      text: "Lowell Edwards brings safety systems into a property's wider technology plan, so alerts reach the right people quickly and everything is maintained as one.",
      elements: [
        "Smoke, heat & CO detection",
        "Water leak & environmental sensors",
        "Alerts & monitoring",
      ],
    },
    features: {
      eyebrow: "What We Install",
      title: "Early warning, clear response.",
      text: "Each system is designed around the building, its occupants and the codes it needs to meet.",
      items: [
        {
          label: "Detection",
          text: "Smoke, heat and carbon monoxide detection for common areas, units and mechanical spaces.",
        },
        {
          label: "Environmental sensors",
          text: "Water leak, temperature and freeze sensors that flag problems before they cause damage.",
        },
        {
          label: "Alerts & notification",
          text: "Notifications to building staff, management and monitoring services the moment something is detected.",
        },
        {
          label: "Emergency access",
          text: "Access control and intercoms configured to release doors and support first responders.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "Planned for the people inside.",
      steps: [
        {
          label: "Assess",
          text: "Review the building, its occupancy and its safety requirements with the owner or manager.",
        },
        {
          label: "Design & Install",
          text: "Specify and install detection and alerting that fits the property and works with its other systems.",
        },
        {
          label: "Maintain",
          text: "Provide testing, service and support so the system is ready when it matters.",
        },
      ],
    },
    cta: {
      title: "Let's Make Your Building Safer.",
      text: "Talk with Lowell Edwards about safety systems for your property.",
    },
  },
] as const satisfies readonly CommercialService[];

export type CommercialSlug = (typeof commercialServices)[number]["slug"];

export function getCommercialService(slug: CommercialSlug): CommercialService {
  return commercialServices.find((s) => s.slug === slug)!;
}
