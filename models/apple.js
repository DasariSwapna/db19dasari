const mongoose = require("mongoose") 
const appleSchema = mongoose.Schema({ 
 apple_type: String, 
 quantity: Number, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Apple",appleSchema) 
