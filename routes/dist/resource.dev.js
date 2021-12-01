"use strict";

var express = require('express'); // var passport = require('passport'); 


var router = express.Router(); // var Account = require('../models/account');  
// Require controller modules. 

var api_controller = require('../controllers/api');

var apple_controller = require('../controllers/apple'); /// API ROUTE /// 
// GET resources base. 


router.get('/resource', api_controller.api); /// APPLE ROUTES /// 
// POST request for creating a Apple.  

router.post('/resource/apples', apple_controller.apple_create_post); // DELETE request to delete Apple. 

router["delete"]('/resource/apples/:id', apple_controller.apple_delete); // PUT request to update Apple. 

router.put('/resource/apples/:id', apple_controller.apple_update_put); // GET request for one Apple. 

router.get('/resource/apples/:id', apple_controller.apple_detail); // GET request for list of all Apple items. 

router.get('/resource/apples', apple_controller.apple_list);
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Apple App',
    user: req.user
  });
});
router.get('/register', function (req, res) {
  res.render('register', {
    title: 'Apple App Registration'
  });
}); // router.post('/register', function(req, res) { 
//   Account.findOne({ username : req.body.username },  
//     function(err, user) { 
//       if(err) { 
//         return res.render('register', { title: 'Registration',  
//                   message: 'Registration error', account : req.body.username }) 
//       } 
//       if(user == {} ){ 
//         return res.render('register', { title: 'Registration',  
//                    message: 'Existing User', account : req.body.username }) 
//       } 
//       let newAccount = new Account({ username : req.body.username }); 
//       Account.register(newAccount, req.body.password, function(err, user){ 
//         if (err) { 
//           return res.render('register', { title: 'Registration',  
//                     message: 'access error', account : req.body.username }) 
//         } 
//         if(!user){ 
//           return res.render('register',{ title: 'Registration',  
//                     message: 'access error', account : req.body.username }) 
//         }  
//         console.log('Sucess, redirect'); 
//         res.redirect('/'); 
//       }) 
//     })    
//   }) 
// router.get('/login', function(req, res) { 
//     res.render('login', { title: 'Apple App Login', user : req.user }); 
// }); 
// router.post('/login', passport.authenticate('local'), function(req, res) { 
//     res.redirect('/'); 
// }); 
// router.get('/logout', function(req, res) { 
//     req.logout(); 
//     res.redirect('/'); 
// }); 
// router.get('/ping', function(req, res){ 
//     res.status(200).send("pong!"); 
// }); 

module.exports = router;