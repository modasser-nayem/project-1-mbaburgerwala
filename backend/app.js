require("dotenv").config();
require("./config/passport");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { errorMiddleware } = require("./middlewares/errorMiddlewares");

const app = express();
module.exports = app;

// Using Middleware
app.use(
   cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "PUT", "POST", "DELETE"],
   })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
         secure: process.env.NODE_ENV === "development" ? false : true,
         httpOnly: process.env.NODE_ENV === "development" ? false : true,
         sameSite: process.env.NODE_ENV === "development" ? false : "none",
      },
   })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.enable("trust proxy");

// routes
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");

app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter);

// route route
app.get("/", (req, res, next) => {
   res.send("<h1>Welcome to our Server MBA Burger Wala</h1>");
});

// not found route
app.get("*", (req, res) => {
   res.status(404).json({
      message: "404, Route Not Found",
   });
});

// Using Error Middleware
app.use(errorMiddleware);
