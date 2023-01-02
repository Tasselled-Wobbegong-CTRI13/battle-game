const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    // write code here
    if(req.cookies.ssid === undefined) {
      res.cookie('ssid', res.locals.userId, { maxAge: 30*1000, httpOnly: true });
      return next();
    } else {
      return next();
    }
  }

module.exports = cookieController;