import { Router } from "express";
import { userController } from "../controllers/userController.js";

export const userRouter=Router();

userRouter.post("/register", userController.registerUser)
userRouter.post("/login", userController.loginUser)



