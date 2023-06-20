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
      id: 1,
      name: "Fanta Guaraná",
      price: 5.0,
      image: "https://www.google.com",
      created_at: new Date(),
    },
    {
      id: 2,
      name: "Coca Cola",
      price: 7.0,
      image: "https://www.google.com",
      created_at: new Date(),
    },
    {
      id: 3,
      name: "McShake Ovomaltine",
      price: 10.0,
      image: "https://www.google.com",
      created_at: new Date(),
    },
    {
      id: 4,
      name: "McShake Ovomaltine",
      price: 10.0,
      image: "https://www.google.com",
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
