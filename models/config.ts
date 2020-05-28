import "https://deno.land/x/dotenv/load.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "postgres",
  database: "Life",
  hostname: "localhost",
  port: 5432,
  password: Deno.env.get("PASSWORD"),
});

await client.connect();

export default client;