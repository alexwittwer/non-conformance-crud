const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  product: { type: String },
});

module.exports = mongoose.model("Program", ProgramSchema);
