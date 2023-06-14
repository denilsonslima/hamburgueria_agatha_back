import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"));

export default app;
