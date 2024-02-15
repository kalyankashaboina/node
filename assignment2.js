const { json } = require("body-parser")
const express=require("express")
const {LocalStorage}=require("node-localstorage")
const localstorage=new LocalStorage('./localstorage')

const app=express()
app.use(express.json())


app.post("/register",(req,res)=>{
localstorage.setItem("assignment2",JSON.stringify(req.body))
const storage=localstorage.getItem("assignment2")
console.log(storage);
res.json({storage})
})
app.listen(3005,()=>{
    console.log("assignment 2 running in 3005")
})