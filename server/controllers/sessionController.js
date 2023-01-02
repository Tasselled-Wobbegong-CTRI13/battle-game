const Session = require('../models/sessionModel');
const errorMessage = require('./errorMessage');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  console.log('ssid from req.cookies ', req.cookies.ssid)
  if (req.cookies.ssid !== undefined) {
    Session.create({ cookieId: res.locals.userId }, (err, session) => {
      console.log(session);
      if (err) return next(errorMessage('sessionController.startSession', err, 'Error with Session, see server log.'));
      return next();
    });
  } else {
    Session.findOne({ cookieId: res.locals.userId }, (err, session) => {
      console.log(session);
      if (err) return next(errorMessage('sessionController.startSession', err, 'Error with Session, see server log.'));
      return next();
    });
  }
};

module.exports = sessionController;