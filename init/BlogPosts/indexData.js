const blogData = require("./data.js")
const Blog = require("../../modals/blogModal.js")
const mongoose = require("mongoose");
 
main()
  .then(() => {
    console.log("mongo connects successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Mudduelectronics");
}

const initDB = async () => {
    await Blog.deleteMany({}).then(() => {
      console.log("Existing data Deleted");
    });
    //   initialData.data = initialData.data.map((obj)=>({...obj , owner: "66a1249ec813ecf13fe72650"}))  //new array with owner
    await Blog.insertMany(blogData.data)
      .then(() => {
        console.log("data has been initialise")
      })
  };
  
  initDB();