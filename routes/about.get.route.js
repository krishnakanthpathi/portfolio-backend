import { Router } from "express";
import About from "../models/about.model.js";

const getAboutRouter = Router();

getAboutRouter.get("/",  async (req , res) => {
    try {
        const about = await About.find({});
        res.json(about);
    } catch (error) {
        res.status(500).json({ error: "About Error" });
    }
});

export default getAboutRouter;