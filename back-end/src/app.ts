import express from "express";
import "express-async-errors";

const app: express.Express = express();

app.use(express.json());

app.get("/", (_req, res) => {
  return res.json("Server OK!");
});

export { app };
