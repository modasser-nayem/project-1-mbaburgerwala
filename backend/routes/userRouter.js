const express = require("express");
const passport = require("passport");
const {
   profile,
   logout,
   getAllUsers,
   getSingleUsers,
   getAdminStats,
   getCoin,
   createCoin,
} = require("../controllers/userController");
const { isAuthenticated, authorizeAdmin } = require("../middlewares/auth");

const router = express.Router();

router.get(
   "/googlelogin",
   passport.authenticate("google", { scope: ["profile"] })
);

router.get(
   "/login",
   passport.authenticate("google", {
      successRedirect: process.env.FRONTEND_URL,
   })
);

router.get("/profile", isAuthenticated, profile);
router.get("/logout", logout);
router.get("/coin", isAuthenticated, getCoin);
router.post("/coin", isAuthenticated, createCoin);

// Admin Access
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAllUsers);
router.get("/admin/user/:id", isAuthenticated, authorizeAdmin, getSingleUsers);
router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

module.exports = router;
