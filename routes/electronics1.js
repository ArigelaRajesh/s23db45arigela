var express = require('express');
const electronics_controlers= require('../controllers/electronics1');
var router = express.Router();

/* GET detail electronics page */
router.get('/detail', electronics_controlers.electronics_view_one_Page);
/* GET create electronics page */
router.get('/create', electronics_controlers.electronics_create_Page);
/* GET update electronics page */
router.get('/update', electronics_controlers.electronics_update_Page);
/* GET delete electronics page */
router.get('/delete', electronics_controlers.electronics_delete_Page);

module.exports = router;