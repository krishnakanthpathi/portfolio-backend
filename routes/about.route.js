import { Router } from "express";
import About from "../models/about.model.js";

const aboutRoute = Router();


aboutRoute.post("/" , (req , res) => {
    const {
        description,
    } = req.body;
    console.log(description);
    try {
        if (!description ) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            const newAbout = new About({
                description,
            });
            newAbout.save();
            res.status(200).json({ 
                message: "About Created Successfully " ,
                data: newAbout
            });
            console.log(newAbout);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
} );

export default aboutRoute;