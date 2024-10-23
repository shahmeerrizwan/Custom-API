import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  title: String,
  description: String,
  price: Number
});

const Products = mongoose.model('Products', productsSchema);

export default Products