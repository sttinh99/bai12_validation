const express = require("express");
var shortid = require("shortid");
var controller = require('../controller/users.controller');
var db = require('../db');

var router = express.Router();


router.get("/",controller.index);
  router.get("/create", controller.getCreate);
  router.post("/create", controller.postCreate);
  router.get("/:id/update",controller.getUpdate);
  router.post("/update",controller.postUpdate);  
  router.get('/:id/delete',controller.delete);

module.exports = router;