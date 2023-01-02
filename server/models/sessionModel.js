const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema ({
  cookieId: {type: String, required: true, unique: true},
  createdAt: {type: Date, expires: 30, default: Date.now()}
});

const Session = mongoose.model('session', sessionSchema);

module.exports = Session;