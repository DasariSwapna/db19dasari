const mongoose = require("mongoose");
const appleSchema = mongoose.Schema({
  apple_type: {
    type: String,
    minLength: 2,
    maxLength: 12,
  },
  quantity: {
    type: Number,
    min: 2,
    max: 5,
  },
  cost: Number,
});

module.exports = mongoose.model("Apple", appleSchema);
