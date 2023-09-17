import "express-async-errors";
import bcrypt from "bcrypt";
import User from "../models/user.js";

export const signin = async (req, res) => {
  res.send("signin ok");
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const result = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ result });
};
