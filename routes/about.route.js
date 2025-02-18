import { Router } from "express";

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
            res.json({
                description
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
} );

export default aboutRoute;