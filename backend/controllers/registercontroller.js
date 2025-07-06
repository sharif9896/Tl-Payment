import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";

const register = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const { image } = req.files;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "Error in fileing an image" });
    }
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All Fields are required!" });
    }
    const allowedformate = ["image/png", "image/jpeg"];
    if (!allowedformate.includes(image.mimetype)) {
      return res.status(402).json({ error: "Error in image formate!" });
    }

    const cloud_response = await cloudinary.uploader.upload(image.tempFilePath);
    const data = {
      name,
      email,
      phone,
      image: {
        public_id: cloud_response.public_id,
        url: cloud_response.url,
      },
    };
    const newUser = await User.create(data);
    // const newUser = await new User(data);
    // await newUser.save();
    return res.status(201).send("Registered successfully", newUser);
  } catch (err) {
    return res.status(400).send("Error registering user");
  }
};
export { register };
