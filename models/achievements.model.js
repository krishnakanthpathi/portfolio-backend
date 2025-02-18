import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
    title:{ type:String , required:true },
    description:{ type:String , required:true },
    link:{ type:String , required:true },
    image:{ type:String , required:true },
 },{timestamps:true});


const Achievements = new mongoose.model('Achievements', achievementsSchema);
export default Achievements;