var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronics_controller = require('../controllers/electronics');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/electronics', electronics_controller.electronics_create_post);
// DELETE request to delete Costume.
router.delete('/electronics/:id', electronics_controller.electronics_delete);
// PUT request to update Costume.
router.put('/electronics/:id', electronics_controller.electronics_update_put);
// GET request for one Costume.
router.get('/electronics/:id', electronics_controller.electronics_detail);
// GET request for list of all Costume items.
router.get('/electronics', electronics_controller.electronics_list);
module.exports = router;