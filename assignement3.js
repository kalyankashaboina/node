const express=require("express")
const {LocalStorage}=require("node-localstorage")
const localstorage=new LocalStorage("./localstorage")

const app=express()
app.use(express.json())


app.post("/login",(req,res)=>{
    const data=json.parse(localstorage.getItem("assignment3"))
    const{username,password}=req.body
    const validaton=data.find((val)=>{
        val.username===username,
        val.password===password
    })
})




app.listen("3004,",()=>{
    console.log("assignment 3 running in 3004");
})