import express from "express";
import dotenv from "dotenv";

const app = express();


app.use(express.json());
dotenv.config();

const PORT = process.env.PORT ;



app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

app.listen(8080 , () =>{
    console.log("Server is running at http://localhost:8080");
});