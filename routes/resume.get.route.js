import { Router } from "express";
import Resume from "../models/resume.model.js";

const getResumeRouter = Router();

getResumeRouter.get("/", async (req , res) => {
    try {
        const resume = await Resume.find({});
        res.json(resume);
    } catch (error) {
        res.status(500).json({ error: "Resume Error" });
    }
});

export default getResumeRouter;
