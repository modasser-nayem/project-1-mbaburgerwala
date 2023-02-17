const ErrorHandler = require("../utils/ErrorHandler");

module.exports = {
   isAuthenticated(req, res, next) {
      const token = req.cookies["connect.sid"];
      if (!token) {
         return next(new ErrorHandler("Not Login", 401));
      }
      next();
   },
   authorizeAdmin(req, res, next) {
      if (req.user.role !== "admin") {
         return next(new ErrorHandler("Only Admin Allowed", 405));
      }
      next();
   },
};
