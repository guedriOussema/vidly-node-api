const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
  },
  password:{
      type: String,
      required: true,
      minlength: 5,
      maxlength: 97841
  },
  isAdmin:{
    type: Boolean,
    required: true
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(97841).required(),
    isAdmin: Joi.boolean().required()
  };

  return Joi.validate(user, schema);
}

exports.userSchema = userSchema;
exports.User = User; 
exports.validate = validateUser;