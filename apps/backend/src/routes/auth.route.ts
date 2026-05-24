import { Router } from "express";
import { loginController, signupController } from "../controllers/auth.controller";

const route = Router();

route.post("/login", loginController);
route.post("/signup", signupController);

export default route;
