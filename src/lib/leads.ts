import { prisma } from "@/lib/prisma";
import type { ContactLeadInput } from "@/lib/lead-validation";

export type CreateLeadInput = ContactLeadInput & { formType: string };

export function createLead(input: CreateLeadInput) {
  return prisma.lead.create({
    data: input,
    select: { id: true, formType: true, createdAt: true },
  });
}
