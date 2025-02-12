import express from "express"
import cors from "cors"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"

let app = express()


app.get("/",function(req,res){
    res.json({message:"Hello this is my page "})
})





app.listen(8000,function(){
    console.log("Port is running on this port");
    
})