import express from 'express';
import Product from '../models/productModel'
import { isAuth, isAdmin } from '../util';
const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products)
})

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found' })
    }
})

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        oldPrice: req.body.oldPrice,
        newPrice: req.body.newPrice,
        category: req.body.category,
        image: req.body.image,
        originNation: req.body.originNation,
        brand: req.body.brand,
        description: req.body.description,
        countInStock: req.body.countInStock
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: 'New product created', data: newProduct })
    }
    return res.status(500).send({ message: 'Error in creating new product' })
})

router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId)
    if (product) {
        product.name = req.body.name;
        product.oldPrice = req.body.oldPrice;
        product.newPrice = req.body.newPrice;
        product.category = req.body.category;
        product.image = req.body.image;
        product.originNation = req.body.originNation;
        product.brand = req.body.brand;
        product.description = req.body.description;
        product.countInStock = req.body.countInStock;
        const updatedProduct = await product.save();
        if (updatedProduct) {
            return res.status(200).send({ message: "Product updated", data: updatedProduct })
        }
    }
    return res.status(500).send({ message: 'Error in Updating product.' })
})

router.delete("/:id", async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({ message: "Products deleted" })
    } else {
        res.send("Error in Deletion")
    }
})


export default router;