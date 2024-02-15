const express= require("express")
const {LocalStorage}=require('node-localstorage')

const localstorage=new LocalStorage('./localstorage')


const app=express();
app.use(express.json())



app.get("/users",(req,res)=>{
localstorage.setItem("value",JSON.stringify(req.body))

const storage=localstorage.getItem("value")

res.json({storage})
})


app.listen(3006,()=>{
    console.log("port is running");
})