var express = require('express');
const electronics_controlers= require('../controllers/electronics1');
var router = express.Router();

/* GET detail electronics page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);


module.exports = router;