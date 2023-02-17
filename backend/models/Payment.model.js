const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
   signature_id: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
