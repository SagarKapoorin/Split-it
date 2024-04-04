import mongoose from "mongoose";
import Payment from "./payments";
import Friends from "./friends"
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    authMethod: {
        type: String,
        enum: ["email", "google"],
        required: true,
    },
    password: {
        type: String,
        required: function() {
          return this.authMethod !== 'google';
        },
        min: 5,
      },
    picture: {
      type: String,
      default: "",
    },
    Friends: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Friends',
        default:[],
    }],
    Payment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Payment',
            default:0,
    }],
    amount_toget:{
        type:Number,
        default:0,
        max:100000,
    },
    amount_togive:{
        type:Number,
        default:0,
        max:100000,
    },
    
  },
  { timestamps: true }
);

UserSchema.post("findOneAndDelete", async (user) => {
    if (user) {
      await Payment.deleteMany({ _id: { $in: user.payments } });
      await Friends.deleteMany({ _id: { $in: user.friends } });
    }
  });

const User = mongoose.model("User", UserSchema);
export default User;