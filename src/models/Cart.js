import { Schema, model } from "mongoose";
import { uuid } from "uuidv4";

const ProductItemSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: false,
        default: 1
    },
});

const CartSchema = new Schema({
    items: [ProductItemSchema],
    user_id: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
});

export default model('Cart', CartSchema);