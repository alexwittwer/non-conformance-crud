const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  ncList: { type: [String] },
});

module.exports = mongoose.model("Collection", CollectionSchema);
