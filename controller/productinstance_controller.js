const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const ProductInstance = require("../model/productinstance");
const Product = require("../model/product");

exports.productinstance_detail = asyncHandler(async (req, res, next) => {
  const productInstance = await ProductInstance.findByID(req.params.id).exec;

  res.render("productinstance_detail", {product: productInstance);
});

exports.productinstance_list = asyncHandler(async (req, res, next) => {
  const inventory = await ProductInstance.find().exec();

  res.render("productinstance_list", { inventory: inventory });
});

exports.productinstance_create_get = asyncHandler(async (req, res, next) => {
  const allProducts = await Product.find({}, "name").exec();

  res.render("productinstance_form", { product_list: allProducts });
});

exports.productinstance_create_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product Instance create GET");
});

exports.productinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.render("productinstance_delete");
});

exports.productinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product Instance create GET");
});

exports.productinstance_update_get = asyncHandler(async (req, res, next) => {
  res.render("productinstance_form");
});

exports.productinstance_update_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product Instance create GET");
});
