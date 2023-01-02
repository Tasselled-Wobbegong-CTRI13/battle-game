const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    // write code here
    if(req.cookies.ssid === undefined) {
      res.cookie('ssid', res.locals.userId, { httpOnly: true });
      return next();
    } else {
      return next();
    }
  }

module.exports = cookieController;