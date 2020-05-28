import "https://deno.land/x/dotenv/mod.ts";
const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: Deno.env.get("DATABASE"),
    host: Deno.env.get("DATABASE_HOST"),
    port: 5432,
    user: Deno.env.get("USER"),
    password: Deno.env.get("PASSWORD"),
  },
  dialect: "pg",
};

export default configPg;
