import "https://deno.land/x/dotenv/mod.ts";
const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "dbi6r94vgt52nj",
    host: Deno.env.get("DATABASE_URL"),
    port: 5432,
    user: "rxgiclvddkrgdc",
    password: Deno.env.get("PASSWORD"),
  },
  dialect: "pg",
};

export default configPg;
