/**
 * Homepage photography, sourced from Pexels (free to use, no attribution
 * required — https://www.pexels.com/license/). Swap any `src` for the
 * client's own photography when it becomes available; no other code needs
 * to change.
 */

const pexels = (id: string, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Unsplash (free to use under the Unsplash License, no attribution required
// — https://unsplash.com/license).
const unsplash = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

// Control4's official marketing CDN. Lowell Edwards is an authorized Control4
// and Lutron dealer; these are used only where the client confirmed we have
// rights to use Control4 dealer/brand imagery. Do not add other brands' sites
// here without the same confirmation.
const control4 = (path: string) =>
  `https://cdn.prod.website-files.com/629926620ba03720384bebb3/${path}`;

// ecobee's Contentful-hosted CDN — genuine ecobee product photography.
const ecobee = (path: string, w = 1080) =>
  `https://images.ctfassets.net/a3qyhfznts9y/${path}?w=${w}&h=${w}&q=80&fm=webp`;

export const homeImages = {
  hero: {
    src: pexels("13722886"),
    alt: "Dark, modern living room with a wall-mounted TV on a slatted wood media wall, an illuminated built-in bookshelf, and a plush sectional",
  },
  brandIntroduction: {
    src: "/images/brand-introduction.png",
    alt: "Elegant living room with floor-to-ceiling motorized shades and a wall-mounted smart home control panel overlooking a lake and mountains",
  },
  residentialSmartHome: {
    src: pexels("6580378"),
    alt: "Open-concept luxury living room and kitchen with ambient pendant lighting",
  },
  residentialHomeTheater: {
    src: control4(
      "67e2e7874942818584cd740f_087_25_Control4.com_VideoandHomeTheater_TrueMagic1.webp"
    ),
    alt: "Custom-built private cinema with tiered leather theater seating facing a large projection screen, lit by cool architectural LED coves",
  },
  smartHomeFull: {
    src: "/images/smart-home-full.png",
    alt: "Luxury living room at dusk with a tablet controlling lighting, shades, comfort, audio/video, and security scenes",
  },
  homeTheatreFull: {
    src: control4(
      "67e2e788a215927321c8d1d7_087_25_Control4.com_VideoandHomeTheater_TrueMagic5.webp"
    ),
    alt: "Dedicated home theater with acoustic wall paneling, warm lamp-lit recliners, and a glowing projection screen",
  },
  projectLarge: {
    src: pexels("7045941"),
    alt: "Great room with panoramic windows overlooking the city at dusk",
  },
  projectMediaRoom: {
    src: pexels("30647348"),
    alt: "Media room with projector screen and cozy wood-toned seating",
  },
  projectOutdoor: {
    src: pexels("6663044"),
    alt: "Covered outdoor living space overlooking a pool at dusk",
  },
  finalCta: {
    src: pexels("28586234"),
    alt: "Luxury stone villa with a pool beneath a dramatic sunset sky",
  },
  whyExperience: {
    src: pexels("6588599"),
    alt: "Classic home library with built-in wood shelving and a leather chair",
  },
  whyResponse: {
    src: pexels("19899066"),
    alt: "Modern living room with a large wall-mounted video display",
  },
  whySupport: {
    src: pexels("6782346"),
    alt: "Stylish living room with a statement chandelier and layered ambient lighting",
  },
  whyService: {
    src: pexels("5982764"),
    alt: "Luxury living room with expansive windows fitted for automated shades",
  },
  whyPricing: {
    src: pexels("1571458"),
    alt: "Smart home automation touchscreen control panel built into a kitchen wall",
  },
  whyTechnicians: {
    src: pexels("6186823"),
    alt: "Gated modern luxury villa exterior representing integrated home security",
  },
} as const;

/**
 * Smart Home Integration page photography. Every shot here is unique to
 * this page — sourced from Pexels (free to use, no attribution required) —
 * rather than reused from `homeImages`, so the page reads as its own
 * gallery instead of a repeat of the homepage.
 */
export const smartHomeImages = {
  hero: {
    src: unsplash("1650091507687-5ea34d80e674"),
    alt: "Close-up of a hand adjusting a smart home touchscreen control panel mounted in a dark modern kitchen, representing a home's connected comfort and lighting",
  },
  introduction: {
    src: pexels("5179534"),
    alt: "Elegant open-concept living and dining space with wood ceiling beams and a sculptural chandelier",
  },
  systems: {
    audioVideo: {
      src: pexels("19966811"),
      alt: "Wall-mounted flat-screen television with a soundbar above a live-edge wood console",
    },
    lighting: {
      src: pexels("1668860"),
      alt: "Warm wood-paneled interior with architectural ceiling lighting",
    },
    shades: {
      src: pexels("6764827"),
      alt: "Close-up of motorized metal blinds filtering warm sunlight into linear patterns across a room",
    },
    thermostat: {
      src: ecobee(
        "2X1B1YoVnr0jj6qBWg3UeN/083196c076d2c2e65421da89103ac2c4/Transforming_the_thermostat.jpg"
      ),
      alt: "Ecobee smart thermostat mounted on a wall, showing its indoor air quality dashboard",
    },
    automation: {
      src: control4(
        "697cf2e0106e7276f9fb04ea_798_25_Control4T5_TabletopInWall.png"
      ),
      alt: "Wall-mounted Control4 touchscreen displaying the date, time, indoor temperature, and currently playing music",
    },
    networking: {
      src: pexels("38337704"),
      alt: "Sleek wireless network router on a warm wood surface, representing a home's connected infrastructure",
    },
    security: {
      src: control4(
        "67f82d25fecf47ade32a7012_087_25_Control4.com_SafetyandSecurity_Surveillance.webp"
      ),
      alt: "Person on a stone-walled patio checking live security camera feeds on a smartphone",
    },
  },
  lifestyle: {
    entertain: {
      src: control4(
        "67e5987d5e482a05a7bcd372_087_25_Control4.com_Audio_Header-1.webp"
      ),
      alt: "Wall-mounted TV showing the Control4 entertainment menu, with streaming apps and whole-home scenes above a sleek soundbar and media console",
    },
    relax: {
      src: pexels("19096629"),
      alt: "Cozy armchair beside a window with sheer curtains in a calm, warmly lit room",
    },
    protect: {
      src: control4(
        "67f82d25b87618e365fef577_087_25_Control4.com_SafetyandSecurity_Products_VideoDoorbells.webp"
      ),
      alt: "Control4 Chime video doorbell mounted beside a residential front entrance",
    },
  },
  integration: {
    src: pexels("31737860"),
    alt: "Modern luxury home illuminated at night, its lighting, comfort, and security working as one",
  },
  cta: {
    src: pexels("1669799"),
    alt: "Elegant, minimalist luxury living room with warm gold accents",
  },
} as const;

/**
 * About page photography, sourced from Pexels (free to use, no attribution
 * required) and unique to this page, so it reads as its own gallery rather
 * than a repeat of the homepage, Smart Home, or Home Theatre pages.
 */
export const aboutImages = {
  hero: {
    src: "/images/about-hero.png",
    alt: "Luxury living room at dusk with panoramic windows overlooking a sunset coastline, a linear gas fireplace, a plush sectional, and a wall-mounted TV displaying a mountain lake scene",
  },
  story: {
    src: unsplash("1721613887012-097af2aaf042"),
    alt: "Modern smart living room with a wall-mounted television and integrated ceiling speakers",
  },
  storyDetail: {
    src: unsplash("1758565811176-ccd94357a844"),
    alt: "Close-up of motorized window shades in a bright, minimalist smart home interior",
  },
  philosophy: {
    src: unsplash("1662454420647-3d20ddcdb8f8"),
    alt: "Contemporary living room with a large wall-mounted TV and warm ambient lighting",
  },
} as const;

/**
 * Projects page photography, unique to this page so it reads as its own
 * gallery rather than a repeat of the homepage or Home Theatre pages.
 */
export const projectsImages = {
  hero: {
    src: "https://images.pexels.com/photos/36353380/pexels-photo-36353380.png?auto=compress&cs=tinysrgb",
    alt: "Dimly lit home media room with a large projection screen, a warm fireplace glow, and plush sectional seating",
  },
  cta: {
    src: "https://images.pexels.com/photos/32177950/pexels-photo-32177950.png?auto=compress&cs=tinysrgb",
    alt: "Stone villa with a glowing pool and open glass doors beneath a soft sunset sky",
  },
} as const;

/**
 * Contact page photography, sourced from Pexels (free to use, no
 * attribution required) and unique to this page, so it reads as its own
 * gallery rather than a repeat of the homepage, About, Smart Home, or Home
 * Theatre pages.
 */
export const contactImages = {
  hero: {
    src: pexels("28652353"),
    alt: "Elegant dining and kitchen space opening onto a lit pool terrace at dusk",
  },
} as const;

/**
 * Home Theatre page photography, sourced from Pexels (free to use, no
 * attribution required) and unique to this page, so it reads as its own
 * gallery rather than a repeat of the homepage or Smart Home page.
 */
export const homeTheatreImages = {
  hero: {
    src: "/images/home-theatre-heroimage.jpg",
    alt: "Luxury home theater with a sectional sofa facing a large wall-mounted screen, framed by warm cove lighting and wood paneling",
  },
  introduction: {
    src: "/images/home-theatre-introduction.png",
    alt: "Dark modern media room with a wall-mounted screen playing an animated film, framed by a slatted wood accent wall and plush sectional seating",
  },
  theatreDesign: {
    src: unsplash("1665827491321-ce05d75c6a32"),
    alt: "Dedicated home theater room with a drop-down screen, flanking speakers, acoustic ceiling tiles, and theater seating",
  },
  seating: {
    src: unsplash("1746439324737-2c9f9a3e81a6"),
    alt: "Row of vibrant red leather reclining theater chairs inside a home theater room",
  },
  seatingClassic: {
    src: "https://cdn.prod.website-files.com/629926620ba03720384bebb3/67e2e789a46d73be2f57f87b_087_25_Control4.com_VideoandHomeTheater_Header3.webp",
    alt: "Rows of empty red velvet theater seats in a dimly lit home cinema",
  },
  seatingRecline: {
    src: unsplash("1710131459450-7c384b8be18f"),
    alt: "Row of bright red leather power recliners with visible armrest controls in a sunlit home theater",
  },
  seatingSignature: {
    src: "/images/theatre-seating-signature.jpg",
    alt: "Row of power-recline leather theater seats with built-in cupholders, lit by warm wood-trimmed cove lighting beside a framed movie poster",
  },
  audio: {
    src: "https://cdn.prod.website-files.com/629926620ba03720384bebb3/67e2e7874ddb8622875786e6_087_25_Control4.com_VideoandHomeTheater_Triad.webp",
    alt: "Tall black tower speaker standing in a minimalist room with warm wood flooring",
  },
  video: {
    src: "https://cdn.prod.website-files.com/629926620ba03720384bebb3/67e2e788ba878152f8953962_087_25_Control4.com_VideoandHomeTheater_Header1.webp",
    alt: "Illuminated drop-down projection screen inside a dedicated home theater room",
    position: "50% 22%",
  },
  lighting: {
    src: "/images/home-theatre-lighting.png",
    alt: "Tiered home theater with leather recliners and warm cove lighting, a wall-mounted touch panel showing a 'Movie' scene, and a large screen displaying a mountain lake sunset",
  },
  cta: {
    src: unsplash("1750994700121-745f310cba34"),
    alt: "Dark, sophisticated living room with a wall-mounted screen, dramatic architectural lighting, and a backlit bookshelf",
  },
} as const;
