import { validateBody } from "../middlewares/validade-middleware";
import { signIn, signUp } from "../controllers/user-controller";
import { Router } from "express";
import { signInSchema, signUpSchema } from "../schemas/user-schemas";

const userRouter = Router();
userRouter
.post("/auth/signin", validateBody(signInSchema), signIn)
.post("/users", validateBody(signUpSchema), signUp)


export default userRouter;
