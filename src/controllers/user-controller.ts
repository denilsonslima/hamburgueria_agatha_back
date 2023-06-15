import { SignInBody, SignUpBody } from "@/protocols";
import userService from "../services/user-services";
import { Request, Response } from "express";

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body as SignInBody;

  try {
    const result = await userService.signIn({ email, password });
    return res.status(200).send({
      token: result,
    });
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.status(401).send(error.message);
    }
    return res.status(500).send({});
  }
}

export async function signUp(req: Request, res: Response) {
  const data = req.body as SignUpBody;

  try {
    const user = await userService.createUser(data);
    res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(409).send(error.message);
    }
    res.status(500).send();
  }
}
