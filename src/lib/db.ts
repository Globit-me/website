import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

declare global {
  var prisma: PrismaClient | undefined;
}
const adapter = new PrismaLibSQL(libsql);
export const db = globalThis.prisma || new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
