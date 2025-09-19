import type { PrismaConfig } from "prisma";

//configurando o prisma
export default {
  migrations: {
    seed: "tsx ./prisma/seed.ts"
  }
} satisfies PrismaConfig;