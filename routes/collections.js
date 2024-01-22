const express = require("express");
const router = express.Router();
const product_controller = require("../controller/product_controller");
const productinstance_controller = require("../controller/productinstance_controller");
const program_controller = require("../controller/program_controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("collections_landing", { title: "NC-Track" });
});

// PRODUCT ROUTES //

router.get("/product/create", product_controller.product_create_get);

router.post("/product/create", product_controller.product_create_post);

router.get("/product/:id/delete", product_controller.product_delete_get);

router.post("/product/:id/delete", product_controller.product_delete_post);

router.get("/product/:id/update", product_controller.product_update_get);

router.post("/product/:id/update", product_controller.product_update_post);

router.get("/product/:id", product_controller.product_detail);

router.get("/products", product_controller.product_list);

// PROGRAM ROUTES //

router.get("/program/create", program_controller.program_create_get);

router.post("/program/create", program_controller.program_create_post);

router.get("/program/:id/delete", program_controller.program_delete_get);

router.post("/program/:id/delete", program_controller.program_delete_post);

router.get("/program/:id/update", program_controller.program_update_get);

router.post("/program/:id/update", program_controller.program_update_post);

router.get("/program/:id", program_controller.program_detail);

router.get("/program/", program_controller.program_list);

/// PRODUCTINSTANCE ROUTES ///

router.get(
  "/productinstance/create",
  productinstance_controller.productinstance_create_get
);

router.post(
  "/productinstance/create",
  productinstance_controller.productinstance_create_post
);

router.get(
  "/productinstance/:id/delete",
  productinstance_controller.productinstance_delete_get
);

router.post(
  "/productinstance/:id/delete",
  productinstance_controller.productinstance_delete_post
);

router.get(
  "/productinstance/:id/update",
  productinstance_controller.productinstance_update_get
);

router.post(
  "/productinstance/:id/update",
  productinstance_controller.productinstance_update_post
);

router.get(
  "/productinstance/:id",
  productinstance_controller.productinstance_detail
);

router.get(
  "/productinstances",
  productinstance_controller.productinstance_list
);

module.exports = router;
