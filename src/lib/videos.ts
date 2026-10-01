/**
 * Projects page video assets. Sourced from real Lowell Edwards project
 * footage in `public/videos/original/` and re-encoded for the web into
 * `public/videos/optimized/` (H.264 MP4 + VP9 WebM, audio stripped,
 * faststart). Project type, description, and service terms are drawn from
 * lowelledwards.com and the terminology already established elsewhere on
 * this site — nothing here is invented.
 */

export interface ProjectVideo {
  id: string;
  type: string;
  description: string;
  services: readonly string[];
  orientation: "landscape" | "portrait";
  poster: { src: string; alt: string };
  sources: { webm: string; mp4: string };
}

export const projectVideos: readonly ProjectVideo[] = [
  {
    id: "theatre-rooms",
    type: "Home Theater Room",
    description:
      "A dedicated theater room designed into an existing library, with a drop-down screen, surround sound, and seating built around the space rather than placed on top of it.",
    services: ["Screens", "Surround Sound", "Acoustics", "Seating"],
    orientation: "landscape",
    poster: {
      src: "/images/projects/theatre-rooms-poster.jpg",
      alt: "Private home theater built into a wood-paneled library, with a drop-down screen, floor-to-ceiling bookshelves, a chandelier, and red curtains",
    },
    sources: {
      webm: "/videos/optimized/theatre-rooms.webm",
      mp4: "/videos/optimized/theatre-rooms.mp4",
    },
  },
  {
    id: "theatre-seating",
    type: "Home Theater Seating",
    description:
      "Theater seating built to order in leather, mohair, or Ultrasuede — sized, spaced, and angled to the room's sightline rather than sold off the floor.",
    services: ["Seating", "Custom Fit"],
    orientation: "portrait",
    poster: {
      src: "/images/projects/theatre-seating-poster.jpg",
      alt: "Row of red leather theater seats with built-in cupholders inside a dedicated home theater room with acoustic wall paneling",
    },
    sources: {
      webm: "/videos/optimized/theatre-seating.webm",
      mp4: "/videos/optimized/theatre-seating.mp4",
    },
  },
  {
    id: "tv-concealment-art",
    type: "TV Concealment",
    description:
      "Motorized artwork that rises and lowers at the touch of a remote, concealing the television until it's wanted and returning the wall to art when it's not.",
    services: ["Motorized Art", "TV Concealment"],
    orientation: "landscape",
    poster: {
      src: "/images/projects/tv-concealment-art-poster.jpg",
      alt: "Framed landscape artwork mounted above a fireplace, concealing a television behind it, with a remote control raising it into place",
    },
    sources: {
      webm: "/videos/optimized/tv-concealment-art.webm",
      mp4: "/videos/optimized/tv-concealment-art.mp4",
    },
  },
  {
    id: "tv-concealment-cabinetry",
    type: "Custom Cabinetry",
    description:
      "A television built into handcrafted cabinetry, rising into view only when it's called for, so the room reads as furniture first.",
    services: ["Custom Cabinetry", "TV Concealment"],
    orientation: "landscape",
    poster: {
      src: "/images/projects/tv-concealment-cabinetry-poster.jpg",
      alt: "Television lift concealed within a handcrafted wood cabinet at the foot of a bed, shown partially raised",
    },
    sources: {
      webm: "/videos/optimized/tv-concealment-cabinetry.webm",
      mp4: "/videos/optimized/tv-concealment-cabinetry.mp4",
    },
  },
] as const;
