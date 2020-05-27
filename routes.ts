import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import {
  addBoard,
  getAllBoards,
  getBoard,
  editBoard,
  deleteBoard,
} from "./models/boards.ts";

const router = new Router();

// get all boards
router.get("/boards", async (ctx) => {
  try {
    const results = await getAllBoards();
    ctx.response.body = results;
  } catch (err) {
    console.log(err);
    ctx.throw(err);
  }
})
  // get board by id
  .get("/boards/:id", async (ctx) => {
    try {
      const results = await getBoard(Number(ctx.params.id));
      ctx.response.body = results;
    } catch (err) {
      console.log(err);
      ctx.throw(err);
    }
  })
  // add board
  .post("/boards", async (ctx) => {
    try {
      const body = await ctx.request.body();
      const values = body.value;
      const results = await addBoard(values);
      ctx.response.body = results;
    } catch (err) {
      console.log(err);
      ctx.throw(err);
    }
  })
  // edit board
  .put("/boards/:id", async (ctx) => {
    try {
      const body = await ctx.request.body();
      const values = body.value;
      const results = await editBoard(Number(ctx.params.id), values);
      ctx.response.body = results;
    } catch (err) {
      console.log(err);
      ctx.throw(err);
    }
  })
  // delete board
  .delete("/boards/:id", async (ctx) => {
    try {
      const results = await deleteBoard(Number(ctx.params.id));
      if (results) {
        ctx.response.status = 204;
      }
    } catch (err) {
      console.log(err);
      ctx.throw(err);
    }
  });

export default router;
