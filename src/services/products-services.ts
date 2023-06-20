import productsRepository from "../repositories/products-repositories";

export async function findProductsAll() {
  const products = await productsRepository.findProductsAll();
  return products;
}

const productsServices = {
  findProductsAll
}

export default productsServices;