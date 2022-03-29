import { Router } from "express";
import CartController from "./controllers/CartController";
const routes = new Router();

routes.get('/carts', CartController.index);
routes.put('/carts/:productID', CartController.addToCart);
routes.delete('/carts/:productID', CartController.delete);


routes.get('/health', (req, res) => res.json({ status: "OK" }));

export default routes;