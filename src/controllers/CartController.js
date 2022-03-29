const CartModel = require("../models/Cart");
const ProductRepository = require("../repositories/ProductRepository");
const ProductNotFoundError = require("../repositories/errors/ProductNotFoundError");

class CartController {

    async index(req, res) {
        try {
            const userID = req.header('X-USER-ID');
            console.log(`user ${userID}`);
            const cart = await CartModel.findByUserID(userID);

            if (!cart) {
                return res.status(404).send();
            }
            return res.json(cart);
        } catch (error) {
            console.error(error);
            res.status(400).send();
        }

    }

    async addToCart(req, res) {
        try {
            const { productID } = req.params;
            const { quantity } = req.body;
            const userID = req.header('X-USER-ID');

            console.log("request params", { productID, quantity, userID });

            const productData = await ProductRepository.getProductByID(productID);
            console.log("api product response", productData);

            if (!productData) {
                return res.status(404).send('o produto não existe')
            }

            const item = {
                quantity,
                product_id: productID,
                price: productData.price
            };

            if (item.quantity > productData.quantity) {
                return res.status(422).send('Quantidade indisponível no estoque.')
            }

            const response = await CartModel.add(userID, item);

            return res.json(response);

        } catch (err) {
            console.error(err);
            if (err instanceof ProductNotFoundError) {
                return res.status(404).send();
            }

            return res.status(500).send();
        }
    }

    async delete(req, res) {
        const { productID } = req.params;
        const userID = req.header('X-USER-ID');

        try {
            await CartModel.delete(userID, productID);

            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: 'Produto não encontrado' })
        }
    }
}

module.exports = new CartController();