import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  /**CHECK HEADER */
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer"))
    throw new Error("Unauthenticated");

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload._id;
    next();
  } catch (error) {
    throw new Error("Unauthenticated");
  }
};
