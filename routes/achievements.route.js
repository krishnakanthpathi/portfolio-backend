import { Router } from "express";
import Achievements from "../models/achievements.model.js";

const achievementsRouter = Router();

achievementsRouter.post("/", (req, res) => {
    const {
        title,
        description,
        link,  
        image
    } = req.body;
    console.log(req.body);
    try {
        if (!title || !description || !link || !image) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            const achievement = new Achievements({
                title,
                description,
                link,
                image
            });
            achievement.save();
            console.log("successfully added achievement");
            res.status(200).json({ 
                message: "Achievement added successfully" ,
                data : achievement
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
}) ;

export default achievementsRouter;