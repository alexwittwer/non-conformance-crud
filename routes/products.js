const express = require("express");
const product_controller = require("../controller/product_controller");
const router = express.Router();

router.get("/products/create", product_controller.product_create_get);

router.post("/products/create", product_controller.product_create_post);

router.get("/products/:id/delete", product_controller.product_delete_get);

router.post("/products/:id/delete", product_controller.product_delete_post);

router.get("/products/:id/update", product_controller.product_update_get);

router.post("/products/:id/update", product_controller.product_update_post);

router.get("/products/:id", product_controller.product_detail);

router.get("/products", product_controller.product_list);

module.exports = router;
