const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
    },
    originalPrice: Number,
    currPrice: Number,
    desc: String,
    imageLink:String,
    category:String,
})

const Product = mongoose.model("Product", productSchema);
const Camera = mongoose.model("Camera", productSchema);
const Computer = mongoose.model("Computer", productSchema);
const Mobile = mongoose.model("Mobile", productSchema);
const Watch = mongoose.model("Watch", productSchema);
const Keyboard = mongoose.model("Keyboard", productSchema);
module.exports = { Product,Camera,Computer,Mobile,Watch,Keyboard };