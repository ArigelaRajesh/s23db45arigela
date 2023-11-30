const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
item_name: String,
brand: String,
price:{type: Number,
    min: 50,
    max: 1500, 
}    
});
module.exports = mongoose.model("electronics", electronicsSchema)