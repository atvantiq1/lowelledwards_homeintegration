import { z } from "zod";
import { PROJECT_TYPES } from "@/lib/project-types";

const NAME_PATTERN = /^[\p{L}\s'.-]+$/u;
// E.164: "+", country code, then the subscriber number; 15 digits at most.
const PHONE_PATTERN = /^\+[1-9]\d{7,14}$/;
const HAS_LETTER = /\p{L}/u;

export const MESSAGE_MAX_LENGTH = 2000;

function requiredText(label: string, min: number, max: number) {
  return z
    .string({ error: `Please enter your ${label}.` })
    .trim()
    .min(1, { error: `Please enter your ${label}.` })
    .min(min, { error: `Must be at least ${min} characters.` })
    .max(max, { error: `Must be at most ${max} characters.` });
}

export const contactLeadSchema = z.object({
  name: requiredText("name", 2, 100).regex(NAME_PATTERN, {
    error: "Use letters, spaces, hyphens, apostrophes or periods only.",
  }),
  email: z
    .string({ error: "Please enter your email." })
    .trim()
    .toLowerCase()
    .min(1, { error: "Please enter your email." })
    .max(254, { error: "Must be at most 254 characters." })
    .pipe(z.email({ error: "Please enter a valid email address." })),
  phone: z
    .string({ error: "Please enter your phone number." })
    .trim()
    .min(1, { error: "Please enter your phone number." })
    .regex(PHONE_PATTERN, { error: "Please enter a valid phone number." }),
  projectType: z.enum(PROJECT_TYPES, {
    error: "Please select a project type.",
  }),
  location: requiredText("location", 2, 150).regex(HAS_LETTER, {
    error: "Please enter a city and state.",
  }),
  message: requiredText("project details", 10, MESSAGE_MAX_LENGTH),
});

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  projectType: "Project type",
  location: "Location",
  message: "Message",
};

// Returns the first issue as "Field name: message" for the API response.
export function formatValidationMessage(error: z.ZodError): string {
  const issue = error.issues[0];
  if (!issue) return "Invalid submission.";

  const field = issue.path[0];
  const label = typeof field === "string" ? FIELD_LABELS[field] : undefined;
  return label ? `${label}: ${issue.message}` : issue.message;
}
