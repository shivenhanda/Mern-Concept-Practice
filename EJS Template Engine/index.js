import express from 'express'
import path from 'path'

const app=express()
const port=8000

app.set('view engine',"ejs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/profile/:username",(req,res)=>{
    res.send(`
        <h1>Welcome ${req.params.username}</h1>
         <button onclick="goBack()">⬅ Back</button>

        <script>
            function goBack() {
                window.history.back()
            }
        </script>
        `
    )
})

app.listen(port,()=>{
    console.log("Available localhost on",port)
})