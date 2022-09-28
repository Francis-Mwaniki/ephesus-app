import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    repeatPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("register", registerSchema);
