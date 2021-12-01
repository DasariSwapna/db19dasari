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

var router = express.Router(); // A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 

var secured = function secured(req, res, next) {
  if (req.user) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};
/* GET apples */


router.get("/", apple_controlers.apple_view_all_Page);
router.get("/detail", apple_controlers.apple_view_one_Page);
/* GET create costume page */

router.get("/create", secured, apple_controlers.apple_create_Page); // GET create update page //

router.get("/update", secured, apple_controlers.apple_update_Page);
/* GET create costume page */

router.get("/delete", apple_controlers.apple_delete_Page);
module.exports = router;
/* GET detail apple page */