const axios = require('axios');
const ProductNotFoundError = require('./errors/ProductNotFoundError');

const BASE_URL = `http://localhost:3000`;
class ProductRepository {
    async getProductByID(productID) {
        try {
            console.log("request for product data");

            const response = await axios.get(`${BASE_URL}/products/${productID}`);

            console.log(`got status ${response.status}`);


            return response.data;
        } catch (err) {
            if (err.response.status === 404) {
                throw new ProductNotFoundError();
            }
            throw err;
        }
    }
}

module.exports = new ProductRepository();