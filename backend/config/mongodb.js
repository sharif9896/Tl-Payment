import mongoose from "mongoose";

const mongodb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected..");
  });
  await mongoose.connect(
    `mongodb+srv://sharifrayan952:shar98969492if@cluster0.swysom5.mongodb.net/paymentDB`
  );
};
export default mongodb;
