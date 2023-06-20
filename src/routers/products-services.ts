import { findProductsAll } from "../controllers/products-controller";
import { Router } from "express";

const productsRouter = Router();
productsRouter.get("/products", findProductsAll)

export default productsRouter;