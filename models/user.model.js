const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true
     },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minLength: 6
    },
    adress:
    {
        type: String,
        required: false,
        trim: true
    },    
  });
  
  userSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('User', userSchema);