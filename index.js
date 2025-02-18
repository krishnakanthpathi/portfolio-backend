import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import resumeRoute from "./routes/resume.route.js";
import aboutRoute from "./routes/about.route.js";
import achievementsRouter from "./routes/achievements.route.js";
import projectsRouter from "./routes/projects.route.js";

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT ;


app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html");
});



app.use("/api/projects" , projectsRouter    );
app.use("/api/achievements" , achievementsRouter);
app.use("/api/about" , aboutRoute);
app.use("/api/resume" , resumeRoute);


app.listen(8080 , () =>{
    console.log("Server is running at kk  http://localhost:8080");
});