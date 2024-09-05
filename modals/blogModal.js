const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
    title:String,
    date:Date,
    imageUrl:String,
    content:String,
})

const Blog = mongoose.model("Blog",blogSchema)

module.exports = Blog;

