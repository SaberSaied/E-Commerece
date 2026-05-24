import { comparePassword, hashPassword } from "../lib/hash";
import { generateToken, verifyToken } from "../lib/jwt";
import { prisma } from "../lib/prisma";


export const authService = {
  login: async (email: string, password: string) => {
    // Implement login logic here
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    // Compare password with hashed password
    if (!await comparePassword(password, user.password)) {
      throw new Error("Invalid password");
    }

    // TODO: Generate JWT token here and return it along with user data
    const token = await generateToken(user);

    // Return user object with token
    return { ...user, token };
  },

  signup: async (name: string, email: string, password: string) => {
    // Implement signup logic here
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email
      },
      select: {
        id: true
      }
    });
    if (existingUser) {
      throw new Error("User already exists");
    }
    // Hash the password before saving to database
    const hashedPassword = await hashPassword(password);

    // Create new user in database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return newUser;
  },

  auth: async (token: string) => {
    // Implement auth logic here
    try {
      const decoded = await verifyToken(token);
      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}