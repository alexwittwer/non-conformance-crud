const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductInstanceSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the AudioProcessor model
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  location: String,
  status: {
    type: String,
    enum: ["In Stock", "Back-order", "Out of stock"],
    default: "In Stock",
  },
});

module.exports = mongoose.model("ProductInstance", ProductInstanceSchema);
