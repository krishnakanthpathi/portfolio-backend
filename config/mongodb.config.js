import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl = process.env.MONGODB_URL;

const connnectDB = async () => {

    try {
        await mongoose.connect(dburl);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log(error + " Error while connecting to MongoDB");
    }

};

export default connnectDB;
