import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv"

dotenv.config({path: ".env"})



if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL not found in environment');


export default defineConfig({
    schema: "./src/lib/db/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
  });

//npx drizzle-kit push