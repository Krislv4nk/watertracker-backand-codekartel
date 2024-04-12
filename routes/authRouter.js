import express from "express";
import authController from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";

import { userSignUpAndLoginSchema } from "../schemas/usersSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignUpAndLoginSchema),
  authController.signUp
);

authRouter.post(
  "/login",
  validateBody(userSignUpAndLoginSchema),
  authController.signIn
);

authRouter.post("/logout", authenticate, authController.logOut);

export default authRouter;
