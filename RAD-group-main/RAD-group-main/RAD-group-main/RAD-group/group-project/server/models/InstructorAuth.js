const mongoose = require('mongoose');

const insSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { 
     type: String, 
     required: true,
     match: [/^(?=.*Instructor)(?=.*[A-Z])(?=.*\d).{8,}$/, 'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and include the word "Instructor".']

  }
});

module.exports = mongoose.model('Ins', insSchema);
