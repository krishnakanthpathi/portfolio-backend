import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name:{ type:String , required:true },
    description:{ type:String , required:true },
    gitlink : {type : String , required : true},
    weblink : {type : String , required : true},
    imageurl : {type : String , required : true},
 },{timestamps:true});

const Project = mongoose.model('Project', projectSchema);

export default Project;