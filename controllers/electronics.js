var electronics = require('../models/electronics');
// List of all electronics
exports.electronics_list = async function(req, res) {
    try{
    theElectronics = await electronics.find();
    res.send(theElectronics);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try{
    theElectronics = await electronics.find();
    res.render('electronics', { title: 'Electronics Search Results', results: theElectronics });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };   
// for a specific electronics.
exports.electronics_detail = async function(req, res) {
    console.log("electronics" + req.params.id)
    try {
    result = await electronics.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle electronics create on POST.
exports.electronics_create_post = async function(req, res) {
    console.log(req.body)
    let document = new electronics();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"item_name":"Speaker", "brand":REdmi, "price":"150"}
    document.item_name = req.body.item_name;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
       };
// Handle electronics delete on DELETE.
exports.electronics_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await electronics.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle electronics update form on PUT.
exports.electronics_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await electronics.findById( req.params.id)
    // Do updates of properties
    if(req.body.item_name)
    toUpdate.item_name = req.body.item_name;
    if(req.body.brand) toUpdate.brand = req.body.brand;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };