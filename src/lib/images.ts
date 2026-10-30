import homeHero from "@/assets/images/home/hero-smart-panel.jpg";
import avHero from "@/assets/images/audio-video/hero.jpg";
import avIntroduction from "@/assets/images/audio-video/introduction.jpg";
import avWholeHomeAudio from "@/assets/images/audio-video/whole-home-audio.jpg";
import avLiving from "@/assets/images/audio-video/living.jpg";
import avOutdoor from "@/assets/images/audio-video/outdoor.jpg";
import avListening from "@/assets/images/audio-video/listening.jpg";
import avDiscreet from "@/assets/images/audio-video/discreet.jpg";
import avCta from "@/assets/images/audio-video/cta.jpg";
import intercomsHero from "@/assets/images/commercial/intercoms-hero.webp";
import intercomsButterflyMX from "@/assets/images/commercial/intercoms-butterflymx.webp";
import intercomsDoorBird from "@/assets/images/commercial/intercoms-doorbird.webp";
import intercomsCta from "@/assets/images/commercial/intercoms-cta.webp";
import accessHero from "@/assets/images/commercial/access-hero.webp";
import accessAkuvoxReader from "@/assets/images/commercial/access-akuvox-reader.webp";
import accessAkuvoxLobby from "@/assets/images/commercial/access-akuvox-lobby.webp";
import accessCta from "@/assets/images/commercial/access-cta.webp";
import videoHero from "@/assets/images/commercial/video-hero.webp";
import videoCamera from "@/assets/images/commercial/video-camera.webp";
import videoEntrance from "@/assets/images/commercial/video-entrance.webp";
import videoCta from "@/assets/images/commercial/video-cta.webp";
import safetyHero from "@/assets/images/commercial/safety-hero.webp";
import safetyCta from "@/assets/images/commercial/safety-cta.webp";

/**
 * Homepage photography, sourced from Pexels (free to use, no attribution
 * required: https://www.pexels.com/license/). Swap any `src` for the
 * client's own photography when it becomes available; no other code needs
 * to change.
 */

const pexels = (id: string, w = 2400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Unsplash (free to use under the Unsplash License, no attribution required,
// see https://unsplash.com/license).
const unsplash = (id: string, w = 2400) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

// Control4's official marketing CDN. Lowell Edwards is an authorized Control4
// and Lutron dealer; these are used only where the client confirmed we have
// rights to use Control4 dealer/brand imagery. Do not add other brands' sites
// here without the same confirmation.
const control4 = (path: string) =>
  `https://cdn.prod.website-files.com/629926620ba03720384bebb3/${path}`;

export const homeImages = {
  hero: {
    // Client-supplied, 1536x1024. The house sits left of center with a smart
    // home panel on the right; Hero.tsx biases the crop toward the house on
    // narrow screens, so re-check that if you swap this image.
    src: homeHero,
    alt: "Modern luxury home at dusk with a lit pool and terrace, and a wall-mounted smart home control panel in the foreground",
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
    src: pexels("7166926"),
    alt: "Warm modern living room with a wall-mounted display and floor-length curtains ready for automated shades",
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
 * this page and sourced from Pexels (free to use, no attribution required),
 * rather than reused from `homeImages`, so the page reads as its own
 * gallery instead of a repeat of the homepage.
 */
export const smartHomeImages = {
  hero: {
    src: "https://cdn.prod.website-files.com/67f03f77de69426b9d8fdba4/68efc9b91a94942e9dc1bf6a_DSC01065.jpg",
    alt: "Bright living room with a white sofa facing a wall-mounted TV showing a smart home interface, with keypads on the wall and warm wood accents",
  },
  introduction: {
    src: pexels("5179534"),
    alt: "Elegant open-concept living and dining space with wood ceiling beams and a sculptural chandelier",
  },
  systems: {
    audioVideo: {
      src: pexels("39828921"),
      alt: "Living room with a custom media wall: a large flush-mounted TV on a curved cream panel framed by oak millwork, built-in shelving and a linear fireplace",
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
      src: unsplash("1636569608385-58efc32690ea"),
      alt: "Ecobee smart thermostat on a round white wall plate, its screen showing the room at 69 degrees and 68% humidity",
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
      src: pexels("3423817"),
      alt: "Custom media wall with walnut slat panels framing a marble surround, a wall-mounted TV over a floating AV console, and warm downlights",
      // Keeps the TV centered on the tall desktop crop.
      position: "53% 50%",
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
    src: pexels("5982764"),
    alt: "Sunlit luxury living room with floor-to-ceiling windows, warm wood walls and a leather sectional overlooking the horizon",
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
  // Placeholder portrait until the client supplies a photo of Lowell.
  founder: {
    src: unsplash("1507003211169-0a1dd7228f2d", 1200),
    alt: "Portrait of Lowell Edwards, founder of Lowell Edwards Home Integration",
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
    src: "/images/home-theatre-hero.jpg",
    alt: "Home theater with tiered cream sectional seating facing a large projection screen, framed by walnut and fabric acoustic panels and warm cove lighting",
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

/**
 * Lighting & Shades page photography, sourced from Pexels (free to use, no
 * attribution required) and unique to this page, so it reads as its own
 * gallery rather than a repeat of the other residential pages. No Lutron
 * marketing imagery is used, only the Lutron logo already in
 * `/images/brands`, because dealer rights to Lutron's photography have not
 * been confirmed (see the note on `control4` above).
 */
export const lightingShadesImages = {
  hero: {
    src: pexels("7546599"),
    alt: "Sunlit glass-walled living space with warm timber cladding, blinds drawn partway across the far windows, and a pale sofa facing open water",
  },
  introduction: {
    src: pexels("8134802"),
    alt: "Open living and dining space with a full-height linen drape beside a sliding glass door, warm timber and soft daylight",
  },
  lighting: {
    src: pexels("19689230"),
    alt: "Elegant living room with warm lamplight, a drum pendant and glowing wood shelving, framed by tall drapery",
  },
  shades: {
    src: pexels("6077368"),
    alt: "Bright corner room with a window wall, a pale roller shade and sheer drapery, and white upholstered seating",
    position: "50% 40%",
  },
  integration: {
    src: pexels("8082311"),
    alt: "Sunlight falling across a polished floor through tall windows and heavy drapery, with a chandelier lit overhead",
  },
  experiences: {
    src: pexels("6580239"),
    alt: "Living room with floor-to-ceiling glass doors, a timber ceiling and a grey sofa overlooking a lake",
  },
  cta: {
    src: pexels("31817162"),
    alt: "Double-height living room with floor-to-ceiling glass and sunken seating, overlooking the sea",
  },
} as const;

/**
 * Networking page photography, sourced from Pexels and Unsplash (both free
 * to use, no attribution required). The page deliberately shows homes and
 * living spaces rather than hardware, since the network is meant to read as the
 * quiet foundation behind them. No manufacturer imagery is used.
 */
export const networkingImages = {
  hero: {
    src: unsplash("1745429523637-60f5986cc1db"),
    alt: "Modern living room with a wall-mounted TV on a slatted wood and grey feature wall, backlit shelving and a softly lit floating console",
    position: "50% 50%",
  },
  introduction: {
    src: unsplash("1583847268964-b28dc8f51f92"),
    alt: "Calm living corner with a pale sofa, round wooden side tables and framed prints against a soft green wall",
  },
  introductionWide: {
    src: unsplash("1682184805271-11671b7ecf4c"),
    alt: "Spacious open-plan living space in soft neutrals with a low modular sofa, pendant lights and tall windows toward a lake",
  },
  wholeHome: {
    src: pexels("12002390"),
    alt: "Bright living room with tall windows and a fireplace, a lavender sectional sofa and a view of the hills beyond",
  },
  spaces: {
    living: {
      src: unsplash("1628744876497-eb30460be9f6"),
      alt: "Light-filled living room with two grey velvet sofas facing each other beside a linear fireplace",
    },
    office: {
      src: pexels("2883049"),
      alt: "Home office with a tall walnut bookshelf, a leather lounge chair and a desk with task chairs beside large windows",
    },
    theatre: {
      src: unsplash("1743685889437-210ad44b6c5f"),
      alt: "Home theater with a large projection screen on a warm panelled wall, recessed ceiling lights and low seating facing the screen",
    },
  },
  integration: {
    src: pexels("20130628"),
    alt: "Sunlit living room with white armchairs and a sofa beside a floor-to-ceiling window overlooking green hills",
  },
  cta: {
    src: pexels("323781"),
    alt: "Contemporary house with a stone and timber facade, a flat roof and a band of glazing against a blue sky",
  },
} as const;

/**
 * Security page photography, sourced from Pexels and Unsplash (both free to
 * use, no attribution required) and unique to this page. The page leads with
 * beautiful homes and spaces, because security is meant to read as part of a
 * well-designed property, so only the cameras section shows a device up
 * close. The doorbell inset is Control4 dealer imagery covered by the
 * client-confirmed rights noted on the `control4` helper above. Swap any `src`
 * for the client's own project photography when it becomes available; no
 * other code needs to change.
 */
export const securityImages = {
  hero: {
    src: pexels("4933643"),
    alt: "Large stone and shingle home at dusk beneath a pink and lilac sky, with warmly lit windows, a three-car garage and a curving driveway around a landscaped island",
    position: "50% 50%",
  },
  introduction: {
    src: pexels("5252546"),
    alt: "Bright modern home entrance with a tall bronze front door between glazed panels, clipped shrubs and a timber-clad porch",
  },
  residential: {
    src: pexels("37591155"),
    alt: "White dome camera mounted discreetly at the corner of a modern pale facade beside a tall glazed window",
    position: "45% 45%",
  },
  doorbell: {
    src: control4(
      "67f82d25b87618e365fef577_087_25_Control4.com_SafetyandSecurity_Products_VideoDoorbells.webp"
    ),
    alt: "Slim video doorbell mounted flush beside a residential front entrance",
  },
  coverage: {
    grounds: {
      src: unsplash("1569595772723-28b435a286a3"),
      alt: "Landscaped grounds at night with a curving paved path, beds of flowers and softly lit trees leading to a timber garden pavilion",
    },
    door: {
      src: pexels("14750384"),
      alt: "Carved timber front door set in a limestone wall beneath a stone lintel, flanked by two lantern wall lights",
    },
    paths: {
      src: pexels("31737859"),
      alt: "Illuminated lawn and stone terrace beside a modern home's lit entrance at dusk",
      position: "30% 50%",
    },
  },
  connected: {
    src: pexels("7534561"),
    alt: "Spacious, light-filled living room with cream sofas, a patterned rug, tall curtains and polished timber floors",
    position: "50% 55%",
  },
  cta: {
    src: pexels("7031411"),
    alt: "Contemporary timber-clad and white house with large glazed openings, a pool terrace and a soft sunrise sky",
  },
} as const;

/**
 * Stills for the Projects "In the Details" gallery. Each one reuses a photo
 * already vetted for the matching service page, so no new sources are added.
 */
export const projectGalleryImages = [
  {
    label: "Lighting Control",
    caption: "One touch sets the scene for movie night",
    image: homeTheatreImages.lighting,
  },
  {
    label: "Home Theater",
    caption: "Screen, acoustics and seating built around one sightline",
    image: homeTheatreImages.theatreDesign,
  },
  {
    label: "Theater Seating",
    caption: "Power-recline leather, fitted to the room",
    image: homeTheatreImages.seatingSignature,
  },
  {
    label: "Audio & Video",
    caption: "Displays and sound that sit quietly in the room",
    image: smartHomeImages.systems.audioVideo,
  },
  {
    label: "Motorized Shades",
    caption: "Light that moves with the day",
    image: smartHomeImages.systems.shades,
  },
] as const;

/**
 * Audio & Video page photography. The hero is Unsplash and the outdoor and
 * Discreet By Design shots are Pexels (both free to use, no attribution
 * required), stand-ins until photos of real Jersey Shore projects are
 * available. The rest is lifestyle photography from the official sites of
 * brands Lowell Edwards carries (Sonos, KEF). Confirm dealer usage rights with each brand before launch,
 * as with the Control4 note above.
 *
 * All of these are local copies in src/assets/images/audio-video (resized
 * to at most 2000px) rather than remote URLs: the brand CDNs were slow
 * origins for the image optimizer, and static imports get a blur placeholder
 * plus immutable caching.
 */
export const audioVideoImages = {
  hero: {
    src: avHero,
    alt: "Spacious luxury living room with a black marble media wall holding a large TV above a linear fireplace, recessed ceiling lights and a cream sectional",
  },
  introduction: {
    // KEF Ci3160REFM-THX in-wall speakers, us.kef.com
    src: avIntroduction,
    alt: "Large TV on a white wall flanked by slim KEF in-wall speakers with a center channel below, above a marble ledge and terracotta sofa",
  },
  wholeHomeAudio: {
    // KEF LS50 Meta, us.kef.com
    src: avWholeHomeAudio,
    alt: "Pair of black KEF bookshelf speakers and a slim streamer and amplifier stack on light built-in shelving in a bright, modern home office",
  },
  spaces: {
    living: {
      // Sonos Arc Ultra and Sub 4, sonos.com
      src: avLiving,
      alt: "Family on a blue sofa watching a wall-mounted TV with a Sonos soundbar beneath it in a bright living room",
    },
    outdoor: {
      // Pexels (3131971)
      src: avOutdoor,
      alt: "Backyard movie night under the stars, with a large outdoor screen, string lights and lounge seating around a fire",
    },
    listening: {
      // KEF Reference 4 Meta, us.kef.com
      src: avListening,
      alt: "White KEF Reference tower speakers and center channel beneath a wall-mounted TV against a textured concrete wall",
    },
  },
  discreet: {
    // Pexels (12715501)
    src: avDiscreet,
    alt: "Bright white open-plan great room with ceiling spotlights, linen sofas and a wall of glass doors opening onto a terrace above the ocean",
  },
  cta: {
    src: avCta,
    alt: "Covered outdoor living space overlooking a pool at dusk",
  },
} as const;

/**
 * Commercial service page photography (see src/lib/commercial.ts). Each
 * page's hero also appears as its thumbnail in the Commercial navigation menu.
 *
 * Everything except Safety Systems' intro and feature comes from the client's
 * own intercom site (lowelledwards-intercom.com): New York and New Jersey
 * multifamily buildings and the Akuvox, ButterflyMX and DoorBird products
 * Lowell Edwards installs. They are local copies in
 * src/assets/images/commercial, so they get a blur placeholder and don't
 * depend on that site staying up. Safety Systems' device shots are Control4
 * dealer imagery from control4.com/solutions/safety-security and
 * /solutions/products/locks (see the note on `control4` above).
 */
export const commercialImages = {
  buildingIntercoms: {
    hero: {
      src: intercomsHero,
      alt: "Warmly lit apartment building lobby entrance with black-framed glass doors and an Akuvox video intercom panel on the wall beside them",
      position: "60% 50%",
    },
    intro: {
      src: intercomsButterflyMX,
      alt: "ButterflyMX video intercom mounted on a red brick wall beside a leafy shrub, with city towers behind",
      position: "82% 50%",
    },
    feature: {
      src: intercomsDoorBird,
      alt: "Stainless-steel DoorBird video door station mounted beside the glass doors of a modern apartment building",
      position: "60% 50%",
    },
    cta: {
      src: intercomsCta,
      alt: "Brick and stone mid-rise apartment building with a landscaped entrance on a tree-lined street",
    },
  },
  accessControl: {
    hero: {
      src: accessHero,
      alt: "Two residents entering a modern apartment building through glass doors beside a video intercom and access reader",
      position: "65% 50%",
    },
    intro: {
      src: accessAkuvoxReader,
      alt: "Hand presenting a key card to an Akuvox access reader beside a face recognition intercom on a brick wall",
      position: "70% 50%",
    },
    feature: {
      src: accessAkuvoxLobby,
      alt: "Resident tapping an ID card on an Akuvox access reader in a bright building lobby",
      position: "60% 50%",
    },
    cta: {
      src: accessCta,
      alt: "Contemporary brick and glass apartment building entrance with an intercom panel on a quiet, tree-lined street",
    },
  },
  videoSecurity: {
    hero: {
      src: videoHero,
      alt: "Security camera mounted outside a brick apartment building entrance lit warmly at dusk",
      position: "60% 50%",
    },
    intro: {
      src: videoCamera,
      alt: "Bullet security camera on a bracket outside a modern building, with palms in the evening light",
      position: "55% 50%",
    },
    feature: {
      src: videoEntrance,
      alt: "Security camera mounted above an apartment building entrance with a video intercom by the gate",
      position: "55% 50%",
    },
    cta: {
      src: videoCta,
      alt: "Modern apartment building entrance on a busy city street lined with towers",
    },
  },
  safetySystems: {
    hero: {
      src: safetyHero,
      alt: "Waterfront apartment building entrance with glass doors, a video intercom and planted terrace beds",
      position: "50% 40%",
    },
    intro: {
      src: control4(
        "681a1e619a37c66482374f67_087_25_Control4.com_SurveillanceandSecurity_Sensor1.webp"
      ),
      alt: "White wall-mounted motion sensor",
    },
    feature: {
      src: control4(
        "67f82d20fecf47ade32a6c95_087_25_Control4.com_SafetyandSecurity_Doorstation.webp"
      ),
      alt: "Control4 door station on a stone wall beside a phone showing a live video call from the door",
    },
    cta: {
      src: safetyCta,
      alt: "Apartment building with a glass lobby entrance and intercom panel on a city street",
    },
  },
} as const;
