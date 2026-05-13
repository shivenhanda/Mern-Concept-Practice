import express from "express";

const app=new express()
const port=8000

app.get("/",(req,res)=>{
    res.send("Backend working")
})

app.listen(port,()=>{
    console.log("Available on localhost",port)
})