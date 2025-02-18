import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dburl = process.env.MONGODB_URL;

const connnectDB = async () => {

    try {
        await mongoose.connect(dburl);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log(" Error while connecting to MongoDB");
        console.log(error);
    }

};

export default connnectDB;
