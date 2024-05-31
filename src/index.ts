import dotenv from "dotenv";
import config from "../knexfile";
import express from "express";
import knex from "knex";
import path from "path";
import router from "./routes";
import { Model } from "objection";
import { Express } from "express";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "/views");

app.use(express.urlencoded({ extended: false }));
app.locals.baseURL = `${process.env.BASE_URL}:${port}`;

// Koneksi Express & Knex
const knexInstance = knex(config["development"]);
Model.knex(knexInstance);

/** Install JSON request parser */
app.use(express.json());

/** Install View Engine */
app.set("views", viewsDir);
app.set("view engine", "ejs");

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
