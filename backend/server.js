import express from "express";


console.log("server is running!");
const app=express();
app.get("/",(req, res)=>{
    res.send("server is ready!");
});

app.listen(5000, () => {
    console.log("working as intented");
});
