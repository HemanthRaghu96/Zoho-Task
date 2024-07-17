// Import necessary modules

const mongoose = require("mongoose");

// Mongoose itemSchema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
   type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  poster: {
    type: Array,
  },
  
});

const Item  = new mongoose.model("Item ", itemSchema);
module.exports = Item ;
