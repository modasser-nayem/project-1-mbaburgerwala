const User = require("../models/User.model");
const { asyncErrorMid } = require("../middlewares/errorMiddlewares");
const Order = require("../models/Order.model");

const profile = (req, res, next) => {
   res.status(200).json({
      success: true,
      user: req.user,
   });
};
const logout = (req, res, next) => {
   req.session.destroy((err) => {
      if (err) {
         return next(err);
      }
      res.clearCookie("connect.sid", {
         secure: process.env.Node_ENV === "development" ? false : true,
         httpOnly: process.env.Node_ENV === "development" ? false : true,
         sameSite: process.env.Node_ENV === "development" ? false : "none",
      });
      res.status(200).json({
         message: "Logged Out",
      });
   });
};

// Admin Access
const getAllUsers = asyncErrorMid(async (req, res, next) => {
   const users = await User.find();
   res.status(200).json({
      success: true,
      users,
   });
});

// Admin Access
const getSingleUsers = asyncErrorMid(async (req, res, next) => {
   const user = await User.findById(req.params.id);
   res.status(200).json({
      success: true,
      user,
   });
});

// Admin Access
const getAdminStats = asyncErrorMid(async (req, res, next) => {
   const userCount = await User.countDocuments();
   const orders = await Order.find();
   const preparingOrders = orders.filter(
      (order) => order.orderStatus === "Preparing"
   );
   const shippedOrders = orders.filter(
      (order) => order.orderStatus === "Shipped"
   );
   const deliveredOrders = orders.filter(
      (order) => order.orderStatus === "Delivered"
   );

   let totalIncome = 0;
   orders.forEach((i) => {
      totalIncome += i.totalAmount;
   });

   res.status(200).json({
      success: true,
      userCount,
      ordersCount: {
         total: orders.length,
         preparing: preparingOrders.length,
         shipped: shippedOrders.length,
         delivered: deliveredOrders.length,
      },
      totalIncome,
   });
});

// Coin
const getCoin = asyncErrorMid(async (req, res, next) => {
   const user = await User.findOne({ _id: req.user._id });
   res.status(200).json({
      success: true,
      coin: user.coin,
   });
});

const createCoin = asyncErrorMid(async (req, res, next) => {
   const generatedCoin = req.body;
   const user = await User.findOne({ _id: req.user._id });
   user.coin += generatedCoin;
   res.status(201).json({
      success: true,
      message: `You are get ${generatedCoin} coins`,
   });
});

module.exports = {
   profile,
   logout,
   getCoin,
   createCoin,
   getAllUsers,
   getSingleUsers,
   getAdminStats,
};
