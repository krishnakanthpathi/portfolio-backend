import e, { Router } from "express";

const projectsRouter = Router();

projectsRouter.post("/", (req, res) => {
    const {
        title,
        description,
        gitlink,
        weblink,
        image,
    } = req.body;
    console.log(req.body);
    try {
        if (!title || !description || !gitlink || !weblink || !image) {
            res.status(400).json({ message: "All fields are required" });
        } else {
            res.json({
                title,
                description,
                gitlink,
                weblink,
                image,
            });
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
    }


});

export default projectsRouter;