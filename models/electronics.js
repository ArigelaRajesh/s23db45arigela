const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
item_name: String,
brand: {type: String,
minlength: 5,
maxlength: 15,
},   
price:{type: Number,
    min: [50, "price should be atleast 50$"],
    max: [1500, "maximum price should be 1500$"], 
}    
});
module.exports = mongoose.model("electronics", electronicsSchema)