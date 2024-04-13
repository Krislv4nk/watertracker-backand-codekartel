import { Schema, model } from "mongoose";
import { emailRegexp } from "../constans/user-constans.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    oldPassword: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    waterRate: {
      type: Number,
      default: ''
    }
  },
  { versionKey: false, timestamps: true }
);

const User = model("User", userSchema);

export default User;
