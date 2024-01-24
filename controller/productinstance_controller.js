const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const ProductInstance = require("../model/productinstance");
const Product = require("../model/product");

exports.productinstance_detail = asyncHandler(async (req, res, next) => {
  const product = await ProductInstance.findById(req.params.id);

  res.render("productinstance_detail", { productinstance: product });
});

exports.productinstance_list = asyncHandler(async (req, res, next) => {
  const inventory = await ProductInstance.find().exec();

  res.render("productinstance_list", { inventory: inventory });
});

exports.productinstance_create_get = asyncHandler(async (req, res, next) => {
  const allProducts = await Product.find().exec();

  res.render("productinstance_form", { product_list: allProducts });
});

exports.productinstance_create_post = [
  body("product").trim().isLength({ min: 1 }).escape(),
  body("serialNumber").escape(),
  body("location").escape(),
  body("status").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newProductInstance = new ProductInstance({
      product: req.body.product,
      serialNumber: req.body.serialNumber,
      location: req.body.location,
      status: req.body.status,
    });

    if (!errors.isEmpty()) {
      const allProducts = await Product.find().exec();
      res.render("productinstance_form", {
        productinstance: newProductInstance,
        product_list: allProducts,
        errors: errors.array(),
      });
      return;
    } else {
      await newProductInstance.save();
      res.redirect("/inventory");
    }
  }),
];

exports.productinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.render("productinstance_delete");
});

exports.productinstance_delete_post = asyncHandler(async (req, res, next) => {
  await ProductInstance.findByIdAndDelete(req.params.id);
  res.redirect("/inventory");
});

exports.productinstance_update_get = asyncHandler(async (req, res, next) => {
  const [productinstance, allProducts] = await Promise.all([
    ProductInstance.findById(req.params.id).exec(),
    Product.find().exec(),
  ]);

  res.render("productinstance_form", {
    product_list: allProducts,
    productinstance: productinstance,
  });
});

exports.productinstance_update_post = [
  body("product").trim().isLength({ min: 1 }).escape(),
  body("serialNumber").escape(),
  body("location").escape(),
  body("status").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const updatedProduct = new ProductInstance({
      product: req.body.product,
      serialNumber: req.body.serialNumber,
      location: req.body.location,
      status: req.body.status,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      const allProducts = await Product.find().exec();
      res.render("productinstance_form", {
        productinstance: updatedProduct,
        product_list: allProducts,
        errors: errors.array(),
      });
      return;
    } else {
      await ProductInstance.findByIdAndUpdate(req.params.id, updatedProduct);
      res.redirect("/inventory");
    }
  }),
];
