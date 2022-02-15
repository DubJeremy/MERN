const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
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
        email: { 
            type: String, 
            required: true,
            validate: [isEmail],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        adress:
        {
            type: String,
            required: false,
            trim: true
        },
        phoneNb:
        {
            type: Number,
            min: [10, "Le numéro de téléphone n'est pas valide"],
            max: 10,
            required: false,
            trim: true
        },
        wishList:
        {
            type: [String]
        }
    },
    { 
        timestamps: true,
    }
  );

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
  
  userSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('User', userSchema);