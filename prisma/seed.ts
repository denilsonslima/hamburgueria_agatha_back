import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const burguer = [
    {
      id: 1,
      name: "Hamburguer",
      price: 14.0,
      image:
        "https://static.ifood-static.com.br/image/upload/t_medium/pratos/042a9d09-4f65-4e36-ba5a-720a358202af/202301011522_hzt9qn1odmm.png",
      created_at: new Date(),
    },
    {
      id: 2,
      name: "X-Burgue",
      price: 16.0,
      image:
        "https://static.ifood-static.com.br/image/upload/t_medium/pratos/042a9d09-4f65-4e36-ba5a-720a358202af/202204232217_6J36_i.jpg",
      created_at: new Date(),
    },
    {
      id: 3,
      name: "Big Kenzie",
      price: 18.0,
      image:
        "https://static.ifood-static.com.br/image/upload/t_medium/pratos/84e8881a-f77b-4d2a-bd4b-9eba2cb6110d/202306140553_5nbzbpsckdt.png",
      created_at: new Date(),
    },
    {
      id: 4,
      name: "Combo Kenzie",
      price: 16.0,
      image:
        "https://static.ifood-static.com.br/image/upload/t_medium/pratos/d7a777fe-f1ee-4925-8256-68efe3f0b6b0/202301090930_ik3fqdpy8uh.png",
      created_at: new Date(),
    },
  ];

  const beverage = [
    {
      id: 5,
      name: "Fanta Guaraná",
      price: 5.0,
      image: "https://s3-sa-east-1.amazonaws.com/bluesoft-erp/estrelaazul/ecommerce/produtos/fotos/b7f1acf8-81c5-4db0-a3ad-43001028ca28/foto_product.jpg",
      created_at: new Date(),
    },
    {
      id: 6,
      name: "Coca Cola",
      price: 7.0,
      image: "https://media.gettyimages.com/id/458464735/pt/foto/coca-cola.jpg?s=612x612&w=0&k=20&c=JsWw1GFPrd6cYMRxYtoKohevrywe-HwOz4mOa6zlluo=",
      created_at: new Date(),
    },
    {
      id: 7,
      name: "McShake Ovomaltine",
      price: 15.0,
      image: "https://d2umxhib5z7frz.cloudfront.net/Brasil/79458%20MOP.png?1627559671018",
      created_at: new Date(),
    },
    {
      id: 8,
      name: "McShake Ovomaltine",
      price: 20.0,
      image: "https://s2.glbimg.com/t2SngMVdFNPzWZxsABxUkGYopLw=/s.glbimg.com/jo/g1/f/original/2016/09/13/milk.jpg",
      created_at: new Date(),
    },
  ];

  await prisma.beverage.deleteMany();
  await prisma.beverage.createMany({
    data: beverage
  })

  await prisma.burger.deleteMany();
  await prisma.burger.createMany({
    data: burguer
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
