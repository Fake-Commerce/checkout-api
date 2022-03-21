import {Schema, model} from "mongoose";

const CartSchema = new Schema({
    items:{
        type:String
    },
    total:{
        type:Number,
        default:0
    }
}, {
    versionKey: false,
});

export default model('Cart', CartSchema);