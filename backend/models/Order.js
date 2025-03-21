import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ productId: String, quantity: Number }],
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  paymentIntentId: { type: String },
  
});

export const Order = mongoose.model('Order', orderSchema);
