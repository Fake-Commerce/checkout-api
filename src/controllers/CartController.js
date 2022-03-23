import CartRepository from "../repositories/CartRepository";
import ProductRepository from "../repositories/ProductRepository";

class CartController {
    async addToCart(req, res) {
        try {
            const { productID } = req.params;
            const { quantity } = req.body;
            const userID = req.header('X-USER-ID');

            console.log("request params", { productID, quantity, userID });

            const productData = await ProductRepository.getProductByID(productID);

            console.log("api product response", productData);

            const item = {
                quantity,
                product_id: productID,
                price: productData.price
            };

            const response = await CartRepository.add(userID, item);

            return res.json(response);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new CartController();