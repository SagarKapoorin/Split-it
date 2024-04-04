import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    dueDate: {
      type: Date,
      required: true
    },
    haveToPay: {
      type: Boolean,
      default: true
    },
    haveToGet: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
PaymentSchema.pre('save', function(next) {
    if (this.haveToPay === true) {
      this.haveToGet = false;
    }
    next();
  });
const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
