import { Router } from "express";

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
            res.json({
                title,
                description,
                link,
                image
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
}) ;

export default achievementsRouter;