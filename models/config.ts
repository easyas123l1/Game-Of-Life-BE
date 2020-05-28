import "https://deno.land/x/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "postgres",
  database: "Life",
  hostname: Deno.env.get("DATABASE_URL"),
  port: 5432,
  password: Deno.env.get("PASSWORD"),
});

await client.connect();

export default client;
