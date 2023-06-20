import { prisma } from "../config/database";

async function findProductsAll() {
  const burger = await prisma.burger.findMany();
  const beverage = await prisma.beverage.findMany();

  return {
    burger,
    beverage,
  };
}

const productsRepository = {
  findProductsAll
};

export default productsRepository;
