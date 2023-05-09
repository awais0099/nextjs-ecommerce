import mongoose, { Schema } from "mongoose";

interface IProduct {
    title: string;
    slug: string;
    desc: string;
    img: string;
    category: string;
    size: string;
    color: string;
    price: number;
    availableQty: number;
}

const ProductSchema = new mongoose.Schema<IProduct>({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
    availableQty: {type: Number, required: true}, 
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);