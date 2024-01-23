const express = require("express");
const productinstance_controller = require("../controller/productinstance_controller");
const router = express.Router();

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

router.get("/inventory", productinstance_controller.productinstance_list);

module.exports = router;
