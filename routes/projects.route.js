import express, { Router } from "express";
import Project from "../models/projects.model.js";

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
            const newProject = new Project({
                title,
                description,
                gitlink,
                weblink,
                image,
            });
            newProject.save();
            res.status(200).json({ 
                message: "Project added successfully" ,
                data:req.body
             });
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
    }


});

export default projectsRouter;