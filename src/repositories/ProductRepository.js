import axios from 'axios';

const BASE_URL = `http://localhost:3000`;

class ProductRepository {
    async getProductByID(productID) {
        try {
            console.log("request for product data");

            const response = await axios.get(`${BASE_URL}/products/${productID}`);
            
            console.log(`got status ${response.status}`);
            
            return response.data;
        } catch(err) {
            console.error("got error", err);
            
            return err;
        }
    }
}

export default new ProductRepository();