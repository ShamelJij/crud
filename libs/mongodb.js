import mongooose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongooose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
