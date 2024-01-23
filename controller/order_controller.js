const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Order = require("../model/order");
const { DateTime } = require("luxon");

exports.order_create_get = asyncHandler(async (req, res, next) => {
  const date = new Date();
  const today = DateTime.fromJSDate(date).toISODate();
  res.render("order_form", { today: today });
});

exports.order_create_post = [
  body("name").trim().isLength({ min: 1 }).escape(),
  body("description").trim().escape(),
  body("startDate").isISO8601().toDate(),
  body("endDate").isISO8601().toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newOrder = new Order({
      name: req.body.name,
      description: req.body.description,
      orders: [],
      totalCost: 0,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    if (!errors.isEmpty()) {
      res.render("order_form", {
        order: newOrder,
        errors: errors.array(),
      });
      return;
    } else {
      await newOrder.save();
      res.redirect("/orders");
    }
  }),
];

exports.order_delete_get = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate().exec();

  res.render("order_delete", { order: order });
});

exports.order_delete_post = asyncHandler(async (req, res, next) => {
  await Order.findByIdAndDelete(req.params.id);

  res.redirect("/orders");
});

exports.order_update_get = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate().exec();

  res.render("order_form", { order: order });
});

exports.order_update_post = [
  body("name").trim().isLength({ min: 1 }).escape(),
  body("description").trim().escape(),
  body("startDate").isISO8601().toDate(),
  body("endDate").isISO8601().toDate(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const newOrder = new Order({
      name: req.body.name,
      description: req.body.description,
      orders: [],
      totalCost: 0,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      res.render("order_form", {
        order: newOrder,
        errors: errors.array(),
      });
      return;
    } else {
      await Order.findByIdAndUpdate(req.params.id, newOrder);
      res.redirect("/orders");
    }
  }),
];

exports.order_detail = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate().exec();
  console.log(req.params.id);

  res.render("order_detail", { order: order });
});

exports.order_list = asyncHandler(async (req, res, next) => {
  const allOrders = await Order.find().exec();

  res.render("order_list", { orders: allOrders });
});
