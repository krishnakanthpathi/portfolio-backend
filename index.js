import express from "express";
import dotenv from "dotenv";

const app = express();


app.use(express.json());
dotenv.config();

const PORT = process.env.PORT ;



app.get("/api/", (req, res) => {
    res.json({ message: "Hello World" });
})

app.post("/api/projects" , (req , res) => {
    const {
        title,
        description,
        gitlink,
        weblink,
        image,
    } = req.body;
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
}
)

app.get("/api/achievements" , (req , res) => {
    res.json({ message: "Achievements :)" });
})  


app.listen(8080 , () =>{
    console.log("Server is running at kk  http://localhost:8080");
});