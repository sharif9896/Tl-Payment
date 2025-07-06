import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  image: {
    public_id: { type: String, required: true },
    url: { type: Array, required: true },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
