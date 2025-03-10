import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.js';
import { stripeRouter } from './routes/stripe.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user',userRouter)
app.use('/stripe',stripeRouter)

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
