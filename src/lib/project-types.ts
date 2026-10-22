// Shared by the consultation form (client) and the API validation (server),
// so the dropdown and the server-side allow-list can never drift apart.
export const PROJECT_TYPES = [
  "Smart Home Integration",
  "Home Theater",
  "Audio & Video",
  "Lighting & Shades",
  "Home Automation",
  "Networking & Security",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
