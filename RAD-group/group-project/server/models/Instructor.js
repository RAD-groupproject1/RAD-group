const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  NIC: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  email:{
    type:String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  birthday: {
    type:String
  },
});

module.exports = mongoose.model("Instructor", instructorSchema);