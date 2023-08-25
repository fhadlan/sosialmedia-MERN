/**IMPORT MODULES */
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./db/connect.js";

import postsRoutes from "./routes/posts.js";

/**INIT */
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

/**ROUTES */
app.use("/assets", express.static("/public/assets"));
app.use("/api/posts", postsRoutes);

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
