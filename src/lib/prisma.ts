import { PrismaClient } from "@prisma/client";

// In development, Next.js hot-reloads modules on every edit. Without caching
// the client on globalThis, each reload would open a fresh connection pool,
// quickly exhausting GoDaddy's low per-user MySQL connection limit.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
