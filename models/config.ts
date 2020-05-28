// import "https://deno.land/x/dotenv/load.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";

const client = new Client({
  user: "rxgiclvddkrgdc",
  database: "dbi6r94vgt52nj",
  hostname: "ec2-34-200-72-77.compute-1.amazonaws.com",
  port: 5432,
  password: "d067648bd43f0b4c136d32885a217024ed98a983caee9efcba1067cfa5148eb6",
});

await client.connect();

export default client;
