import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dishesData from "../data/dishes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dishesRouter = express.Router();

dishesRouter.get("/", (req, res) => {
  res.status(200).json(dishesData);
});

dishesRouter.get("/:dishID", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/dish.html"));
});

export default dishesRouter;
