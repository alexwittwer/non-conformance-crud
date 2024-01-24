const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductInstanceSchema = new Schema({
  product: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  location: String,
  status: {
    type: String,
    enum: ["In Stock", "Repair", "Awaiting Material"],
    default: "In Stock",
    required: true,
  },
});

ProductInstanceSchema.virtual("url").get(function () {
  return `/inventory/${this._id}`;
});

module.exports = mongoose.model("ProductInstance", ProductInstanceSchema);
