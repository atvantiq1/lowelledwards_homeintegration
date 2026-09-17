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
    src: pexels("8089158"),
    alt: "Bright, airy luxury living room with a white sectional sofa and large sunlit windows",
  },
  brandIntroduction: {
    src: pexels("7031720"),
    alt: "Elegant minimalist living room with soft natural light and gallery wall",
  },
  residentialSmartHome: {
    src: pexels("6580378"),
    alt: "Open-concept luxury living room and kitchen with ambient pendant lighting",
  },
  residentialHomeTheatre: {
    src: pexels("8583821"),
    alt: "Private home theater with leather recliners and a large screen",
  },
  smartHomeFull: {
    src: pexels("6487954"),
    alt: "Bright, elegant living room with an integrated television and ambient lighting",
  },
  homeTheatreFull: {
    src: pexels("13348768"),
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
    src: pexels("16079131"),
    alt: "Classic home library with built-in wood shelving and a leather chair",
  },
  whyResponse: {
    src: pexels("2098443"),
    alt: "Bright entryway with a grand curved staircase and chandelier",
  },
  whySupport: {
    src: pexels("8082233"),
    alt: "Elegant home office with sophisticated lighting and furnishings",
  },
  whyService: {
    src: pexels("451832"),
    alt: "Luxury wine cellar with bottles arranged on wooden shelving",
  },
  whyPricing: {
    src: pexels("6670657"),
    alt: "Organized luxury walk-in closet with warm accent lighting",
  },
  whyTechnicians: {
    src: pexels("8135119"),
    alt: "Minimalist living room with a seamlessly integrated flat-screen television",
  },
} as const;
