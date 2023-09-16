import express from "express";
import { signin, signup } from "../controller/auth.js";
/* ROUTER INIT */
const router = express.Router();

/* ROUTES */
router.route("/signin").post(signin);
router.route("/signup").post(signup);

/* EXPORT */
export default router;
