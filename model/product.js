const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  model: String,
  description: String,
  channels: {
    type: Number,
    default: 2,
  },
  processingType: {
    type: String,
    enum: ["DSP", "Analog", "Hybrid"],
    default: "DSP",
  },
  inputs: [
    {
      type: String,
      required: true,
    },
  ],
  outputs: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  releaseDate: Date,
});

// Virtual for book's URL
ProductSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/products/${this._id}`;
});

module.exports = mongoose.model("Product", ProductSchema);
