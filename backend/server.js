import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import data from "./data";
import productRoute from "./routes/productRoute";
import bodyParser from "body-parser";
import orderRouter from "./routes/orderRoute";

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

// Create user
app.use("/api/users", userRoute);

// Create product
app.use("/api/products", productRoute);

// app.use("/api/orders", orderRouter);

// get one product detail
// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x => x.id === productId);
//     if (product) {
//         res.send(product)
//     } else {
//         res.status(404).send({ msg: "Product Not Found" })
//     }
// })

// get all products list
// app.get("/api/products", (req, res) => {
//     res.send(data.products)
// })
app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
