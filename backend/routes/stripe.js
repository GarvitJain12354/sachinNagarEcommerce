import { Router } from "express";
import { stripePayment } from "../controllers/stripeController.js";

export const stripeRouter=Router();

stripeRouter.post("/create-checkout-session", stripePayment.createCheckoutSession)


