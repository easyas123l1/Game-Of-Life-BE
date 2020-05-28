import "https://deno.land/x/dotenv/mod.ts";
const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "dbi6r94vgt52nj",
    host: "ec2-34-200-72-77.compute-1.amazonaws.com",
    port: 5432,
    user: "rxgiclvddkrgdc",
    password:
      "d067648bd43f0b4c136d32885a217024ed98a983caee9efcba1067cfa5148eb6",
  },
  dialect: "pg",
};

export default configPg;
