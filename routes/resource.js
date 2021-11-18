var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var apple_controller = require('../controllers/apple'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/apples', apple_controller.apple_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/apples/:id', apple_controller.apple_delete); 
 
// PUT request to update Costume. 
router.put('/resource/apples/:id', 
apple_controller.apple_update_put); 
 
// GET request for one Costume. 
router.get('/resource/apples/:id', apple_controller.apple_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/apples', apple_controller.apple_list); 
 
module.exports = router; 