import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("DB Connected");
  });

  
  const dbURI = 'mongodb://localhost:27017/ecommerce'; 

  try {
    await mongoose.connect(dbURI);
    console.log("Connected to local MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

export default connectDB;