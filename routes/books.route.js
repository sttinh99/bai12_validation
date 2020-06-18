const express = require("express");
var shortid = require("shortid");
var db = require('../db');

var router = express.Router();

var controller = require('../controller/books.controller');


router.get("/", controller.index);
router.get("/create",controller.getCreate );
router.post("/create",controller.postCreate );
router.get("/:id/update",controller.getUpdate);
router.post("/update",controller.postUpdate);  
router.get('/:id/delete',controller.delete);

module.exports = router;