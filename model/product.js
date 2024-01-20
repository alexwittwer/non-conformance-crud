const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  model: { type: String, required: true },
  desc: { type: String, required: true },
  qty: { type: Number },
  product_code: { type: String, required: true },
  nsn: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
