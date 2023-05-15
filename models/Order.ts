import mongoose, { Schema } from "mongoose";

interface IOrder {
    userId: string;
    products: {productId: string, quantity: number}[];
    address: string;
    amount: number;
    status: string;
}

const OrderSchema = new mongoose.Schema<IOrder>({
    userId: { type: String, required: true},
    products: [{
        productId: {type: String},
        quantity: { type: Number, default: 1}
    }],
    address: { type: String, required: true },
    amount: { type: Number, required: true},
    status: { type: String, default: 'Pending', required: true}
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema); 
export default Order;