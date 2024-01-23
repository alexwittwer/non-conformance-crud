const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Product = require("../model/product");

exports.product_list = asyncHandler(async (req, res, next) => {
  const productList = await Product.find().exec();

  res.render("product_list", { product_list: productList });
});

exports.product_create_get = asyncHandler(async (req, res, next) => {
  res.render("product_form");
});

exports.product_create_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product create POST");
});

exports.product_delete_get = asyncHandler(async (req, res, next) => {
  res.render("product_delete");
});

exports.product_delete_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product create GET");
});

exports.product_update_get = asyncHandler(async (req, res, next) => {
  res.render("product_form");
});

exports.product_update_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product create GET");
});

exports.product_detail = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate().exec();

  res.render("product_detail", { product: product });
});
