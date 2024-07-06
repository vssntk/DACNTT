const Account = require('../models/Account');

const isLoggedIn = (req, res, next) => {
  if (!req.signedCookies.signed_login) {
    console.log(req.url);
    if(req.url.includes('/login')){
      next();
    }else{
      res.redirect('/login');
    }
  } else {
    Account.findOne({ username: req.signedCookies.username })
      .then(user => {
        if (user) {
          if (user.type == "reset" && req.url != "/firstlogin" && req.url != "/logout") {
            res.redirect('/firstlogin');
          }
          else {
            next();
          }
        } else {
          res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  }
};

module.exports = isLoggedIn;
