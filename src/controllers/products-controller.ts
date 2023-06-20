import productsServices from "../services/products-services";
import { Request, Response } from "express";

export async function findProductsAll(req: Request, res: Response) {

  try {
    const result = await productsServices.findProductsAll();
    return res.status(200).send(result);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.status(401).send(error.message);
    }
    return res.status(500).send({});
  }
}
