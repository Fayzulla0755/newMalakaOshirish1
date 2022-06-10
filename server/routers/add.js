const express=require("express")
const router=express.Router()

router.post("/signup",(req,res)=>{
    let a=req.body
    console.log(a)
})
router.get("/",(req,res)=>{
    res.send("Hello World")
})


module.exports=router