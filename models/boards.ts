import client from "./config.ts";

interface Board {
  id?: number;
  code: string;
  size: string;
  description: string;
}

async function getAllBoards() {
  const result = await client.query({
    text: 'SELECT * FROM "boards";',
  });
  return result.rowsOfObjects();
}

async function getBoard(id: number) {
  const result = await client.query({
    text: 'SELECT * FROM "boards" WHERE id = $1',
    args: [id],
  });
  return result.rowsOfObjects()[0];
}

async function addBoard(board: Board) {
  const result = await client.query({
    text:
      'INSERT INTO "boards" (code, size, description) VALUES ($1, $2, $3) RETURNING *;',
    args: [board.code, board.size, board.description],
  });
  return result.rowsOfObjects()[0];
}

async function editBoard(id: number, board: Board) {
  const result = await client.query({
    text:
      'UPDATE "boards" SET code = $2, size = $3, description = $4 WHERE id = $1 RETURNING *;',
    args: [id, board.code, board.size, board.description],
  });
  return result.rowsOfObjects()[0];
}

async function deleteBoard(id: number) {
  const result = await client.query({
    text: 'DELETE FROM "boards" WHERE id = $1',
    args: [id],
  });
  return true;
}

export {
  addBoard,
  getBoard,
  getAllBoards,
  editBoard,
  deleteBoard,
};
