const { isAuthenticated, authorizeAdmin } = require("../middlewares/auth");
const {
   createOrderCOD,
   myOrders,
   getOrderDetails,
   getAdminOrders,
   processOrder,
} = require("../controllers/orderController");

const express = require("express");
const router = express.Router();

router.post("/createorder", isAuthenticated, createOrderCOD);

router.get("/myorders", isAuthenticated, myOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);

// Admin Accesses
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

module.exports = router;
