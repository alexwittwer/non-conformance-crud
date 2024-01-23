const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

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

OrderSchema.virtual("url").get(function () {
  return `/orders/${this._id}`;
});

OrderSchema.virtual("endDateFormatted").get(function () {
  return DateTime.fromJSDate(this.endDate).toLocaleString(DateTime.DATE_MED);
});

OrderSchema.virtual("startDateFormatted").get(function () {
  return DateTime.fromJSDate(this.startDate).toLocaleString(DateTime.DATE_MED);
});

OrderSchema.virtual("startDate_ISO").get(function () {
  return DateTime.fromJSDate(this.startDate).toISODate();
});

OrderSchema.virtual("endDate_ISO").get(function () {
  return DateTime.fromJSDate(this.endDate).toISODate();
});

module.exports = mongoose.model("Order", OrderSchema);
