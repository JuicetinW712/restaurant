import express from "express";
import dishesRouter from "./routes/dishes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 50px;">Restaurant</h1>');
});

app.use("/dishes", dishesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
