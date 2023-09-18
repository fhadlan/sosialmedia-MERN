import "express-async-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Password salah");
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({
    token: token,
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  });
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
