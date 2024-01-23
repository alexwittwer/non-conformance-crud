const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Orders = require("../model/order");

exports.order_create_get = asyncHandler(async (req, res, next) => {
  res.render("order_form");
});

exports.order_create_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: order create GET");
});

exports.order_delete_get = asyncHandler(async (req, res, next) => {
  res.render("order_delete");
});

exports.order_delete_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: order create GET");
});

exports.order_update_get = asyncHandler(async (req, res, next) => {
  res.render("order_form");
});

exports.order_update_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: order create GET");
});

exports.order_detail = asyncHandler(async (req, res, next) => {
  res.render("order_detail");
});

exports.order_list = asyncHandler(async (req, res, next) => {
  const allOrders = await Orders.find().exec();

  res.render("order_list", { orders: allOrders });
});
