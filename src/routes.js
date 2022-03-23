import { Router } from "express";
import CartController from "./controllers/CartController";
const routes = new Router();

routes.put('/carts/:productID', CartController.addToCart);

routes.get('/health', (req, res) => res.json({ status: "OK" }));

export default routes;