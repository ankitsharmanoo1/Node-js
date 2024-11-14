const  mongooose = require("mongoose");

const categorySchema = new mongooose.Schema({
    name:{
      type:String,
      required:true
    }
},{timestamps:true})

export const Category = mongooose.model("Category", categorySchema)