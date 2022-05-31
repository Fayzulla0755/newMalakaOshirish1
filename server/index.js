const express=require("express");
const app=express();
const bodyParser = require("body-parser");


const mongoose=require("mongoose");

const path=require("path");


require("./models/user");
// Routers
const rAdd=require("./routers/add");



const port=(process.env.PORT || '5000')


// connect to mangoose
mongoose.connect('mongodb+srv://fayzulla:r2SZ2yTNmmYKn7d@cluster0.dgrlz.mongodb.net/fors-project',()=>{
    console.log("Conected to MongoDB");
})







app.use(rAdd);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))





app.listen(port,()=>{
    console.log("Server started on port 5000");
})


// r2SZ2yTNmmYKn7d