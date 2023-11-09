const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
item_name: String,
brand: String,
price: Number
})
module.exports = mongoose.model("electronics", electronicsSchema)