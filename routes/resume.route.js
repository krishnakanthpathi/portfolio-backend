import { Router } from "express";
import Resume from "../models/resume.model.js";

const resumeRoute = Router();

resumeRoute.post("/" , (req , res) => {
    const { url } = req.body;   
    console.log(req.body);
    try {
        if (!url) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            const resume = new Resume({
                url
            });
            resume.save();
            console.log("successfully added resume");
            res.status(200).json({ 
                message: "Resume added successfully" ,
                data : resume
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
});

export default resumeRoute;