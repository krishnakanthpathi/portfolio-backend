import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    url : { type:String , required:true }
},{timestamps:true});

const Resume = new mongoose.model('Resume', resumeSchema);
export default Resume;