import "express-async-errors";
import express from "express";

const app: express.Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  return res.json("Server OK!");
});

export { app };
