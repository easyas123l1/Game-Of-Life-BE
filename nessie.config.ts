import "https://deno.land/x/dotenv/mod.ts";
const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "Life",
    host: Deno.env.get("DATABASE_URL"),
    port: 5432,
    user: "postgres",
    password: Deno.env.get("PASSWORD"),
  },
  dialect: "pg",
};

export default configPg;
