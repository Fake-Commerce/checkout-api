import Cart from "../models/Cart";

class CartRepository {
    async index() {
        const cart = await Cart.find();

        return cart;
    }

    async findByUserID(user_id) {
        const userCart = await Cart.findOne({ user_id });
        return userCart;
    }

    async save(cart) {
        const response = await new Cart(cart).save();

        return response;
    }

    async add(user_id, item) {
        console.log("received item", item);

        let cart = await this.findByUserID(user_id);
        if (!cart) {
            cart = {
                user_id,
                items: [item],
            }
            await this.save(cart);

            return;
        }

        const items = cart.items.filter(currentItem => currentItem.product_id !== item.product_id);
        items.push(item);

        console.log("updated items set", items);

        cart.items = items;


        await this.save(cart);

        return;
    }

    async delete(id) {
        const item = await Product.findById(id);
        await item.remove();
    }

    async flush() {
        const itens = await Cart.find();
        await itens.remove();
    }
}

export default new CartRepository();