import { Router } from "express";
import Achievements from "../models/achievements.model.js";

const getAchievementsRouter = Router();

getAchievementsRouter.get("/" , async (req , res) => {
    try {
        const achievements = await Achievements.find({});
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ error: "Achievement Error" });
    }
});

export default getAchievementsRouter;