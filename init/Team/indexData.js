const teamData = require("./data.js")
const mongoose = require("mongoose");
const Team = require("../../modals/TeamModal.js")

main()
    .then(() => {
        console.log("mongo connects successfully");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mudduelectronics");
}

const initDB = async () => {
    await Team.deleteMany({}).then(() => {
        console.log("Existing data Deleted");
    });
    //   initialData.data = initialData.data.map((obj)=>({...obj , owner: "66a1249ec813ecf13fe72650"}))  //new array with owner
    await Team.insertMany(teamData.data)
        .then(() => {
            console.log("data has been initialise")
        })
};

initDB();