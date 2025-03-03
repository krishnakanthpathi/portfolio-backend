import { Router } from 'express';
import Project from '../models/projects.model.js';

const getProjectsRouter = Router();

getProjectsRouter.get("/", async (req, res) => {
    try {
        const projects = await Project.find({}); 
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Projects Error" });
    }
})
export default getProjectsRouter;