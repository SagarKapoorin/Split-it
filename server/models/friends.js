import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    friend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    chat: {
        type: [{
          sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
          },
          message: {
            type: String,
            required: true
          },
          timestamp: {
            type: Date,
            default: Date.now
          }
        }],
        default: []
      }
    
  },
  { timestamps: true }
);

const Friends = mongoose.model("Friends", UserSchema);
export default Friends;