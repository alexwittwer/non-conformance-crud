const express = require("express");
const order_controller = require("../controller/order_controller");
const router = express.Router();

// order ROUTES //

router.get("/orders/create", order_controller.order_create_get);

router.post("/orders/create", order_controller.order_create_post);

router.get("/orders/:id/delete", order_controller.order_delete_get);

router.post("/orders/:id/delete", order_controller.order_delete_post);

router.get("/orders/:id/update", order_controller.order_update_get);

router.post("/orders/:id/update", order_controller.order_update_post);

router.get("/orders/:id", order_controller.order_detail);

router.get("/orders/", order_controller.order_list);

module.exports = router;
