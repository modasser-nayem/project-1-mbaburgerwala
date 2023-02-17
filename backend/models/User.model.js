const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: String,
   photo: String,
   googleId: {
      type: String,
      required: true,
      unique: true,
   },
   role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   coin: {
      type: Number,
      default: 500,
   },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
