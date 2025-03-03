import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

// post routes
import resumeRoute from "./routes/resume.route.js";
import aboutRoute from "./routes/about.route.js";
import achievementsRouter from "./routes/achievements.route.js";
import projectsRouter from "./routes/projects.route.js";

// get routes
import getProjectsRouter from "./routes/projects.get.route.js";
import getAchievementsRouter from "./routes/achievements.get.route.js";
import getAboutRouter from "./routes/about.get.route.js";
import getResumeRouter from "./routes/resume.get.route.js";

// database connection
import connnectDB from "./config/mongodb.config.js";

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json({ limit: "10mb" }));


dotenv.config();
connnectDB();

const PORT = process.env.PORT ;

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html");
});

// get routes
app.use("/projects", getProjectsRouter );
app.use("/achievements" , getAchievementsRouter);
app.use("/about" , getAboutRouter);
app.get("/resume" , getResumeRouter);

// post routes
app.use("/api/projects" , projectsRouter);
app.use("/api/achievements" , achievementsRouter);
app.use("/api/about" , aboutRoute);
app.use("/api/resume" , resumeRoute);


app.listen(PORT , () =>{
    console.log("Server is running at kk  http://localhost:8080");
});