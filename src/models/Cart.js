const { Schema, model } = require("mongoose");
const { uuid } = require("uuidv4");

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

const CartModel = model('Cart', CartSchema);

CartModel.findByUserID = async (user_id) => {
    const userCart = await CartModel.findOne({ user_id });
    console.log(`user ${user_id}`, userCart);
    return userCart;
}

CartModel.add = async (user_id, item) => {
    console.log("received item", item);

    let cart = await CartModel.findByUserID(user_id);
    if (!cart) {
        cart = {
            user_id,
            items: [item],
        }
        await new CartModel(cart).save();

        return;
    }

    const items = cart.items.filter(currentItem => currentItem.product_id !== item.product_id);
    items.push(item);

    console.log("updated items set", items);

    cart.items = items;

    cart.total = CartModel.getTotal(items);

    await new CartModel(cart).save();

    return;
}

CartModel.getTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

CartModel.delete = async (user_id, productID) => {

    let cart = await CartModel.findByUserID(user_id);

    const items = cart.items.filter(currentItem => currentItem.product_id !== productID);

    console.log("updated items set", items);

    cart.items = items;

    await CartModel.save(cart);

    return;
}

CartModel.flush = async () => {
    const itens = await CartModel.find();
    await itens.remove();
}

module.exports = CartModel;