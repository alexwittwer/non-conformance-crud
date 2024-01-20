const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductInstanceSchema = new Schema({
  ncList: { type: [String] },
});

module.exports = mongoose.model("ProductInstance", ProductInstanceSchema);
