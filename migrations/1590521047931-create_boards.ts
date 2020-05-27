import { Schema } from "https://deno.land/x/nessie/mod.ts";

export const up = (schema: Schema): void => {
  schema.create("boards", (table) => {
    table.id();
    table.string("code", 10000).notNullable();
    table.string("size", 100).notNullable();
    table.string("description", 250).nullable();
  });
};

export const down = (schema: Schema): void => {
  schema.drop("boards");
};
