import "express-async-errors";
import User from "../models/user.js";

export const signin = async (req, res) => {
  res.send("signin ok");
};

export const signup = async (req, res) => {
  // const {firstName,lastName,email,password} = req.body;
  const result = User.create(req.body);
  res.status(201).json(result);
};
