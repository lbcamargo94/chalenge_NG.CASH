import { app } from "./app";
import "dotenv/config";

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
