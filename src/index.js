// require('dotenv').config({path: './env'})
const connectDB = require("./db/index.js");

const dotenv = require("dotenv");


dotenv.config({
  path: './env'
})

connectDB()




















// const express = require("express");
// const app = express();

// const connectDB = async()=>{
//             try{
//                  await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//                  app.on("error", (error)=>{
//                   console.log("ERRR:",error);
//                   throw error
                  
//                  })
//                  PictureInPictureEvent.Listen(process.envPORT, ()=>{
//                   console.log("APP is ;istening  on server");
                  
//                  })
//             }
//             catch(error)
//             {
//               console.error("ERROR: ",error);
              
//             }
// }

// connectDB();