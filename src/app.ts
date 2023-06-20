import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import userRouter from "./routers/user-router";
import productsRouter from "./routers/products-services";

dotenv.config()
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/", userRouter)
  .use("/", productsRouter)

export default app;
