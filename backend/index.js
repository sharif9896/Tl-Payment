import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import registerRoute from "./routes/register.js";
import mongodb from "./config/mongodb.js";
import cloudinaryfunc from "./config/cloudinary.js";
import fileUpload from "express-fileupload";

const app = express();

mongodb();
cloudinaryfunc();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5000", // your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(express.json());

app.use("/api/techlead", registerRoute);
app.use("/", (req, res) => {
  res.send("Api is Running...");
});

app.listen(5000, () => console.log("Server started on port 5000"));
