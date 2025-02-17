import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT ;

app.get("/" , (req , res) => {
    res.sendFile(__dirname + "/index.html");
});

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
}
)

app.post("/api/achievements" , (req , res) => {
    const {
        title,
        description,
        link,  
        image
    } = req.body;
    console.log(req.body);
    try {
        if (!title || !description || !link || !image) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            res.json({
                title,
                description,
                link,
                image
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
})  

app.post("/api/about" , (req , res) => {
    const {
        description,
    } = req.body;
    console.log(description);
    try {
        if (!description ) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            res.json({
                description
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
} )

app.post("/api/resume" , (req , res) => {
    const { url } = req.body;   
    console.log(req.body);
    try {
        if (!url) {
            res.status(400).json({ message: "All fields are required" });
        }else{
            res.json({
                url
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });  
        
    }
})


app.listen(8080 , () =>{
    console.log("Server is running at kk  http://localhost:8080");
});