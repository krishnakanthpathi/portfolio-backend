import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import resumeRoute from "./routes/resume.route.js";
import aboutRoute from "./routes/about.route.js";
import achievementsRouter from "./routes/achievements.route.js";
import projectsRouter from "./routes/projects.route.js";
import connnectDB from "./config/mongodb.config.js";

// models
import Project from "./models/projects.model.js";
import Achievements from "./models/achievements.model.js";
import Resume from "./models/resume.model.js";
import About from "./models/about.model.js";

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10mb" }));
dotenv.config();
connnectDB();

const PORT = process.env.PORT ;

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find({}); 
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/achievements" , async (req , res) => {
    try {
        const achievements = await Achievements.find({});
        res.json(achievements);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/about" , async (req , res) => {
    try {
        const about = await About.find({});
        res.json(about);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/resume" ,async (req , res) => {
    try {
        const resume = await Resume.find({});
        res.json(resume);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// post routes

app.use("/api/projects" , projectsRouter    );
app.use("/api/achievements" , achievementsRouter);
app.use("/api/about" , aboutRoute);
app.use("/api/resume" , resumeRoute);


app.listen(PORT , () =>{
    console.log("Server is running at kk  http://localhost:8080");
});