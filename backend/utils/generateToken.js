import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-netflix", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    sameSite: "strict", // CSRF protection
    secure: ENV_VARS.NODE_ENV !== "development", // Set to true if using HTTPS
  });

  return token;
};
