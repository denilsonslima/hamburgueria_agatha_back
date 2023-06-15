import { SignUpBody } from "@/protocols";
import { prisma } from "../config/database";

async function findByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}

async function createUser({ name, email, password }: SignUpBody) {
  return prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });
}

const userRepository = {
  findByEmail,
  createUser,
};

export default userRepository;
