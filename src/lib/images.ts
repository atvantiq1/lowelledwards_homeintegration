/**
 * Homepage photography, sourced from Pexels (free to use, no attribution
 * required — https://www.pexels.com/license/). Swap any `src` for the
 * client's own photography when it becomes available; no other code needs
 * to change.
 */

const pexels = (id: string, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const homeImages = {
  hero: {
    src: pexels("27164969"),
    alt: "Bright, airy luxury living room with a white sectional sofa and large sunlit windows",
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
    src: pexels("8583821"),
    alt: "Private home theater with leather recliners and a large screen",
  },
  smartHomeFull: {
    src: "/images/smart-home-full.png",
    alt: "Luxury living room at dusk with a tablet controlling lighting, shades, comfort, audio/video, and security scenes",
  },
  homeTheatreFull: {
    src: pexels("7031762"),
    alt: "Wood-paneled home cinema room with a large projection screen",
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
    src: pexels("6487967"),
    alt: "Moody, modern living room with a wall-mounted screen and ambient lighting, depicting a home's connected devices and audio systems",
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
      src: pexels("36077581"),
      alt: "Sleek digital thermostat with a rotary dial set into a warm wood-paneled wall",
    },
    automation: {
      src: pexels("16423104"),
      alt: "Hand adjusting a wall-mounted smart home touchscreen panel set into a tiled kitchen wall",
    },
    networking: {
      src: pexels("38337704"),
      alt: "Sleek wireless network router on a warm wood surface, representing a home's connected infrastructure",
    },
    security: {
      src: pexels("24503710"),
      alt: "Collection of modern smart home security devices, including cameras and sensors, arranged together",
    },
  },
  lifestyle: {
    entertain: {
      src: pexels("373638"),
      alt: "Pair of high-end floor-standing speakers in a wood-toned acoustic listening room",
    },
    relax: {
      src: pexels("19096629"),
      alt: "Cozy armchair beside a window with sheer curtains in a calm, warmly lit room",
    },
    protect: {
      src: pexels("33104381"),
      alt: "Sleek indoor security camera mounted against a warm wood-paneled wall",
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
