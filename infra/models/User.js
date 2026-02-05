import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
