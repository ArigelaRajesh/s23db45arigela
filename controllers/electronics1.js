var electronics = require('../models/electronics');
// List of all electronics
// Handle a show one view with id specified by query
exports.electronics_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await electronics.findById( req.query.id)
    res.render('electronicsdetail',
    { title: 'Electronics Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };