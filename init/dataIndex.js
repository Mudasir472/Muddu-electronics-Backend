// const initData = require("../init/listingData.js");
const initialData = require("./initialData.js");
const {Product} = require("../modals/productsModal.js")
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
  await Product.deleteMany({}).then(() => {
    console.log("Existing data just Deleted");
  });
  //   initialData.data = initialData.data.map((obj)=>({...obj , owner: "66a1249ec813ecf13fe72650"}))  //new array with owner
  await Product.insertMany(initialData.data)
    .then(() => {
      console.log("data has been initialise")
    })
};

initDB();