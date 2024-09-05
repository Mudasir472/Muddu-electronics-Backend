const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const categoryController = require("../controllers/Category.js")

router.use(cookieParser("secretCode"));

router.get("/collections", categoryController.index);

router.get("/cameradata", categoryController.camera);

router.get("/computerdata",categoryController.computer);

router.get("/watchdata", categoryController.watch);

router.get("/mobilesdata", categoryController.mobile);

router.get("/keyboarddata", categoryController.keyboard);

router.get("/blogdata", categoryController.blog);

router.get("/teamdata", categoryController.team);


module.exports = router;