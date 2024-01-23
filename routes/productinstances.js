const express = require("express");
const productinstance_controller = require("../controller/productinstance_controller");
const router = express.Router();

/// PRODUCTINSTANCE ROUTES ///

router.get(
  "/inventory/create",
  productinstance_controller.productinstance_create_get
);

router.post(
  "/inventory/create",
  productinstance_controller.productinstance_create_post
);

router.get(
  "/inventory/:id/delete",
  productinstance_controller.productinstance_delete_get
);

router.post(
  "/inventory/:id/delete",
  productinstance_controller.productinstance_delete_post
);

router.get(
  "/inventory/:id/update",
  productinstance_controller.productinstance_update_get
);

router.post(
  "/inventory/:id/update",
  productinstance_controller.productinstance_update_post
);

router.get("/inventory/:id", productinstance_controller.productinstance_detail);

router.get("/inventory", productinstance_controller.productinstance_list);

module.exports = router;
