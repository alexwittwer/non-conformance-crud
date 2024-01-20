const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  serial: String,
  model: String,
  built: Date,
  config: String,
  ncList: [String],
});
