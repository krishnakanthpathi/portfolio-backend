import { Router } from "express";

const resumeRoute = Router();

resumeRoute.post("/" , (req , res) => {
    const { url } = req.body;   
    console.log(req.body);
    try {
        if (!url) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            res.json({
                url
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
});

export default resumeRoute;