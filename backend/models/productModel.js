import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    oldPrice: { type: Number, default: 0, required: true },
    newPrice: { type: Number, default: 0, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    originNation: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true }
})

const productModel = mongoose.model("Product", productSchema);
export default productModel;