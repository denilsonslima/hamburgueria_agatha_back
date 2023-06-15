import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import userRouter from "./routers/user-router";

dotenv.config()
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/", userRouter)

export default app;
