const { asyncErrorMid } = require("../middlewares/errorMiddlewares");

const Order = require("../models/Order.model");
const ErrorHandler = require("../utils/ErrorHandler");

const createOrderCOD = asyncErrorMid(async (req, res, next) => {
   const {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
   } = req.body;
   const id = req.user._id;
   if (totalAmount > red.user.coin) {
      return next(
         new ErrorHandler(
            "You Don't have enough coins. Please generate Coins",
            404
         )
      );
   } else {
      const orderOptions = {
         shippingInfo,
         orderItems,
         paymentMethod,
         itemsPrice,
         taxPrice,
         shippingCharges,
         totalAmount,
         user: id,
      };
      await Order.create(orderOptions);
      res.status(201).json({
         success: true,
         message: "Order Placed Successfully via Use your Coin",
      });
   }
});

// !Warning before Create payment system

const myOrders = asyncErrorMid(async (req, res, next) => {
   const orders = await Order.find({ user: req.user._id }).populate(
      "user",
      "name"
   );
   res.status(200).json({
      success: true,
      orders,
   });
});

const getOrderDetails = asyncErrorMid(async (req, res, next) => {
   const order = await Order.findById(req.params.id).populate("user", "name");
   if (!order) return next(new ErrorHandler("Invalid Order Id", 404));
   res.status(200).json({
      success: true,
      order,
   });
});

// Admin Access
const getAdminOrders = asyncErrorMid(async (req, res, next) => {
   const orders = await Order.find().populate("user", "name");
   res.status(200).json({
      success: true,
      orders,
   });
});

// Admin Access
const processOrder = asyncErrorMid(async (req, res, next) => {
   const order = await Order.findById(req.params.id);
   if (!order) return next(new ErrorHandler("Invalid Order Id", 404));
   if (order.orderStatus === "Preparing") order.orderStatus = "Shipped";
   else if (order.orderStatus === "Shipped") {
      order.orderStatus = "Delivered";
      order.deliveredAt = Date.now();
   } else if (order.orderStatus === "Delivered") {
      return next(new ErrorHandler("Food Already Delivered", 400));
   }
   await order.save();
   res.status(200).json({
      success: true,
      message: "Status Updated SuccessFully",
      order,
   });
});

module.exports = {
   createOrderCOD,
   myOrders,
   getOrderDetails,
   getAdminOrders,
   processOrder,
};
