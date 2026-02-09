import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/UserRoute.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", route);

const PORT = process.env.PORT || 8009;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("mongodb connection is success....");

    app.listen(PORT, () => {
      console.log(`server port listening at ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log("error", err.toString());
  });
