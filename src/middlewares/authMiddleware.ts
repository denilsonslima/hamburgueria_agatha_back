import { unauthorizedError } from "@/errors/unauthorized-error";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction){
  const authHeader = req.header('Authorization');
  if (!authHeader) throw unauthorizedError();

  const token = authHeader.split(' ')[1];
  if (!token) throw unauthorizedError()

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    // const session = await prisma.session.findFirst({
    //   where: {
    //     token,
    //   },
    // });
    // if (!session) return generateUnauthorizedResponse(res);

    // req.userId = userId;

    return next();
  } catch (err) {
    return res.status(500).send();
  }
}

type JWTPayload = {
  userId: number;
};