import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Stripe from "stripe";
import dotenv from 'dotenv';

dotenv.config()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const userController = {
    registerUser: async (req, res) => {
        const { email, password, name } = req.body;
      
        try {
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
          }
      
          const stripeCustomer = await stripe.customers.create({ email, name });
      
          const user = new User({ email, password, name, stripeCustomerId: stripeCustomer.id });
          await user.save();
      
          const token = jwt.sign({ email }, process.env.JWT_SECRET);
          console.log(token)
      
         
          res.status(201).send({ user, token });
        } catch (error) {
          console.log(error)
          res.status(400).send({ error: error.message });
        }
      },
      loginUser: async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
          if (!user || !(await user.comparePassword(password))) {
            return res.status(400).send({ error: 'Invalid login credentials' });
          }
          
          const token = jwt.sign({ email }, process.env.JWT_SECRET);
          console.log(token)
      
          res.send({ user, token });
        } catch (error) {
          res.status(400).send({ error: error.message });
        }
      }
}