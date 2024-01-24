const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Product = require("../model/product");
const { DateTime } = require("luxon");

exports.product_list = asyncHandler(async (req, res, next) => {
  const productList = await Product.find().exec();

  res.render("product_list", { product_list: productList });
});

exports.product_create_get = asyncHandler(async (req, res, next) => {
  const date = new Date();
  const today = DateTime.fromJSDate(date).toISODate();
  res.render("product_form", { today: today });
});

exports.product_create_post = [
  body("name").trim().isLength({ min: 1 }).escape(),
  body("description").trim().escape(),
  body("model").trim().escape(),
  body("processingType").trim().escape(),
  body("startDate").isISO8601().toDate(),
  body("endDate").isISO8601().toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newProduct = new Product({
      name: req.body.name,
      model: req.body.model,
      description: req.body.description,
      channels: req.body.channels,
      processingType: req.body.processingType,
      price: req.body.price,
      releaseDate: req.body.releaseDate,
    });

    if (!errors.isEmpty()) {
      res.render("product_form", {
        product: newProduct,
        errors: errors.array(),
      });
      return;
    } else {
      await newProduct.save();
      res.redirect("/products");
    }
  }),
];

exports.product_delete_get = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate().exec();

  res.render("product_delete", { product: product });
});

exports.product_delete_post = asyncHandler(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.redirect("/products");
});

exports.product_update_get = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate().exec();

  res.render("product_form", { product: product });
});

exports.product_update_post = asyncHandler(async (req, res, next) => {
  res.render("NOT IMPLEMENTED: Product create GET");
});

exports.product_detail = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate().exec();

  res.render("product_detail", { product: product });
});
