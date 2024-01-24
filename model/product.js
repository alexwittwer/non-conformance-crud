const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

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

ProductSchema.virtual("releaseDate_ISO").get(function () {
  return DateTime.fromJSDate(this.releaseDate).toISODate();
});

module.exports = mongoose.model("Product", ProductSchema);
