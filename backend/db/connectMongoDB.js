import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected:${conn.connection.host}`);
    console.log("Process ID:", process.pid);
    console.log("Platform:", process.platform);
    console.log("Node.js Version:", process.version);
    console.log("Arg:", process.argv);
  } catch (error) {
    console.error("Error connection to mongoDB: ${error.message}");
    process.exit(1);
  }
};

export default connectMongoDB;
