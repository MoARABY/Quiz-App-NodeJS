const express=require("express")
const app=express()
const axios=require("axios")
const EJS=require("ejs")
require("dotenv").config
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","EJS")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.post("/trivia",async (req,res)=>{
const {amount,category,difficulty}=req.body
const response=await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
const Question=response.data.results
res.render("trivia",{arr:Question})
})

let PORT=process.env.PORT ||5000
app.listen(PORT,()=>{
    console.log(`Start Listining At Port ${PORT}`)
})