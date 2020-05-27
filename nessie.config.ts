import "https://deno.land/x/dotenv/load.ts";
const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "Life",
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: Deno.env.get("PASSWORD"),
  },
  dialect: "pg",
};

export default configPg;