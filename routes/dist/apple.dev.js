"use strict";

// var express = require("express");
// var router = express.Router();
// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("apple", { title: "Search Results Apple" });
// });
// module.exports = router;
var express = require("express");

var apple_controlers = require("../controllers/apple");

var router = express.Router();
/* GET apples */

router.get("/", apple_controlers.apple_view_all_Page);
router.get('/detail', apple_controlers.apple_view_one_Page);
/* GET create costume page */

router.get('/create', apple_controlers.apple_create_Page); // GET create update page //

router.get('/update', apple_controlers.apple_update_Page);
/* GET create costume page */

router.get('/delete', apple_controlers.apple_delete_Page);
module.exports = router;
/* GET detail apple page */