import { unauthorizedError } from "../errors/unauthorized-error";
import { SignInBody, SignUpBody } from "@/protocols";
import userRepository from "../repositories/user-repositories";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { conflictError } from "../errors/conflict-error";

export async function signIn({ email, password }: SignInBody) {
  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createToken(user.id);

  return token;
}

export async function createUser({ name, email, password }: SignUpBody) {
  const findUserByEmail = await userRepository.findByEmail(email);

  if (!!findUserByEmail) throw conflictError("duplicate email");

  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw unauthorizedError();
}

async function createToken(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
}

async function getUserOrFail(email: string) {
  const user = await userRepository.findByEmail(email);
  if (!user) throw unauthorizedError();
  return user;
}

const userService = {
  signIn,
  createUser,
};

export default userService;
