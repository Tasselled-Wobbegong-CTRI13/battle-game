// import mongoose from "mongoose";
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://server:cjR9GjH725fkfc2L@battlegame.5l1fxgv.mongodb.net/?retryWrites=true&w=majority';

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
    type:String,
    required:true
  },
  password: {
    type: String,
    required:true
  }, 
})

const User = mongoose.model('user', userSchema);

module.exports = User;