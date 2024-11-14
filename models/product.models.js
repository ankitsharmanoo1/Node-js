const mongooose = require("mongoose");

const productSchema = new mongooose.Schema({
  description:{
    required:true,
    type: String
  },
  name:{
    required:true,
    type: String
  },
  productImage:{
    
  }
}, {timestamps:true});

export const Product = mongooose.model("Product", productSchema)