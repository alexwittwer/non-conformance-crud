const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  orders: [
    {
      productInstance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductInstance", // Reference to the ProductInstance model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalCost: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
});

module.exports = mongoose.model("Order", OrderSchema);
