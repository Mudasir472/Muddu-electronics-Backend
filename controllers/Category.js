const { Product, Computer, Watch, Keyboard, Mobile, Camera } = require("../modals/productsModal");
const Blog = require("../modals/blogModal");
const Team = require("../modals/teamModal");

module.exports.index = async (req, res) => {
    const indexData = await Product.find({});
    res.send(indexData);
}
module.exports.camera = async (req, res) => {
    const indexData = await Camera.find({});
    res.send(indexData);
}
module.exports.computer = async (req, res) => {
    const indexData = await Computer.find({});
    res.send(indexData);
}
module.exports.watch = async (req, res) => {
    const indexData = await Watch.find({});
    res.send(indexData);
}
module.exports.mobile = async (req, res) => {
    const indexData = await Mobile.find({});
    res.send(indexData);
}
module.exports.keyboard = async (req, res) => {
    const indexData = await Keyboard.find({});
    res.send(indexData);
}
module.exports.blog = async (req, res) => {
    const indexData = await Blog.find({});
    res.send(indexData);
}

module.exports.team = async (req, res) => {
    const indexData = await Team.find({});
    res.send(indexData);
}