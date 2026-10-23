import { z } from "zod";
import { PROJECT_TYPES } from "@/lib/project-types";

const NAME_PATTERN = /^[\p{L}\s'.-]+$/u;
const PHONE_PATTERN = /^[\d\s()+.-]+$/;

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
  phone: requiredText("phone number", 1, 40)
    .regex(PHONE_PATTERN, { error: "Please enter a valid phone number." })
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "").length;
        return digits >= 10 && digits <= 15;
      },
      { error: "Please enter a valid phone number." },
    ),
  projectType: z.enum(PROJECT_TYPES, {
    error: "Please select a project type.",
  }),
  location: requiredText("location", 2, 150),
  message: requiredText("project details", 1, 2000),
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
