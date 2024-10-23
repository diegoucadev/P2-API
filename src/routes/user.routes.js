import express from "express";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/users", userController.returnAllUsers);
userRouter.post("/users", userController.insertNewUser);

export default userRouter;
