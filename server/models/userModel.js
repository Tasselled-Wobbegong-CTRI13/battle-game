// import mongoose from "mongoose";
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// replace with credentials
const MONGO_URI = 'mongodb+srv://<username>:<password>@battlegame.5l1fxgv.mongodb.net/?retryWrites=true&w=majority';

const SALT_WORK_FACTOR = 15;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'battlegame'
})
.then(() => console.log('Connected to battlegame [MongoDB].'))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // usernames should be unique
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // a user should only have one email
  }
  // stretch TODO: security questions(?)
})

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hashedPassword) => {
    if (err) return next({log: `Error in bcrypt: ${err}`, message: {err: 'Error creating user'}})
    this.password = hashedPassword;
    return next();
  })
})

const User = mongoose.model('user', userSchema);

module.exports = User;