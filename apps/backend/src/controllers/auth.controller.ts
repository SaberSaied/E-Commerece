import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";


export const loginController = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body provided" });
  }
  const { email, password } = req.body;
  authService.login(email, password)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
}

export const signupController = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body provided" });
  }
  const { name, email, password } : { name: string; email: string; password: string } = req.body;
  authService.signup(name, email, password)
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => {
      // res.status(400).json({ error: error.message });
    });
    next();
}

export const authController = async (req: Request, res: Response) => {
  const { token } = req.body;
  authService.auth(token)
    .then((decoded) => {
      res.status(200).json({ decoded });
    })
    .catch((error) => {
      res.status(401).json({ error: error.message });
    });
}