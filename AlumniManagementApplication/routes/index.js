var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // if (!req.signedCookies.signed_login) {
  //     res.redirect('/login')
  // } else {
  //     Account.findOne({ username: req.signedCookies.username })
  //     .then(user => {
  //         if (user) {
  //             res.render('home', { title: 'Homepage', username: req.signedCookies.username, role_system: req.signedCookies.role_system, avatar: user.avatar });
  //         } else {
  //             res.status(404).json({ message: 'Không tìm thấy người dùng' });
  //         }
  //     })
  //     .catch(error => {
  //         res.status(500).json({ error: error.message });
  //     });
  // }
  res.render('home')
});

//GET login
router.get('/login', function (req, res, next) {
  // try {
  //     const token = req.query.token;
  //     let decoded = true;
  //     if (token != null) {
  //         decoded = jwt.verify(token, 'Alumni');
  //     }

  //     if (decoded) {
  //         if (req.signedCookies.signed_login) {
  //             //Trả về flash message đã đăng nhập thành công.
  //             req.session.flash = {
  //                 type: 'warning', title: 'Bạn đã đăng nhập !!!', message: 'Logout nếu bạn muốn sử dụng tài khoản khác.'
  //             };
  //             res.redirect('/')
  //         } else {
  //             res.render('login', { title: 'Login Page', username: req.session.username, password: req.session.password, token: token })
  //         }
  //     }
  // } catch (err) {
  //     console.error('Token verification error:', err);
  //     // Xử lý khi token không hợp lệ
  //     res.status(401).send('<h2 style="color: orange;">Liên kết không hợp lệ hoặc đã hết hạn.</h2><p>Vui lòng liên hệ quản trị viên để nhận liên kết mới.</p>');
  // }
  res.render('login')
})

//POST login
// router.post('/login', function (req, res, next) {
//   try {
//       const username = req.body.username;
//       const password = req.body.password;
//       const token = req.query.token;
//       if (token != null) {
//           decoded = jwt.verify(token, 'Alumni');
//       }
//       //login process
//       if (!username || !password) {
//           req.session.flash = {
//               type: 'danger', title: 'Đăng nhập thất bại!!!', message: 'Vui lòng điền đầy đủ thông tin.'
//           };
//           req.session.username = username
//           req.session.password = password
//           if (token != null) {
//               res.redirect(`/login/?token=${token}`)
//           } else {
//               res.redirect('/login')
//           }
//       } else {

//           Account.findOne({ username: username }).exec()
//               .then(account => {
//                   if (!account) {
//                       req.session.flash = {
//                           type: 'danger', title: 'Đăng nhập thất bại!!!', message: 'Username không tồn tại.'
//                       };
//                       req.session.username = username
//                       req.session.password = password
//                       if (token != null) {
//                           res.redirect(`/login/?token=${token}`)
//                       } else {
//                           res.redirect('/login')
//                       }
//                   } else {
//                       bcrypt.compare(password, account.password, (err, isMatch) => {
//                           if (err) {
//                               console.error(err);
//                               return;
//                           }

//                           if (isMatch) {
//                               if (account.verify == 0 && token == null) {
//                                   req.session.flash = {
//                                       type: 'danger', title: 'Đăng nhập thất bại!!!', message: 'Vui lòng đăng nhập bằng cách nhấp vào liên kết trong email của bạn.'
//                                   };
//                                   req.session.username = username
//                                   req.session.password = password
//                                   if (token != null) {
//                                       res.redirect(`/login/?token=${token}`)
//                                   } else {
//                                       res.redirect('/login')
//                                   }
//                               } else {
//                                   Account.findOneAndUpdate(
//                                       { username: username },
//                                       { $set: { verify: 1 } },
//                                       { new: true }
//                                   )
//                                       .then(updatedAccount => {
//                                       })
//                                       .catch(error => {
//                                       });
//                                   res.cookie('signed_login', 'login', { signed: true })
//                                   res.cookie('role_system', account.role, { signed: true })
//                                   res.cookie('username', account.username, { signed: true })
//                                   res.cookie('avatar', account.avatar, { signed: true })
//                                   req.session.username = null;
//                                   req.session.password = null;
//                                   req.session.role = account.role
//                                   // req.session.flash = {
//                                   //     type: 'success', title: 'Đăng nhập thành công!!!', message: 'Chào mừng đến với hệ thống Point of sale.'
//                                   // };
//                                   res.redirect('/');
//                               }
//                           } else {
//                               req.session.flash = {
//                                   type: 'danger', title: 'Đăng nhập thất bại!!!', message: 'Mật khẩu chưa chính xác.'
//                               };
//                               req.session.username = username
//                               req.session.password = password
//                               if (token != null) {
//                                   res.redirect(`/login/?token=${token}`)
//                               } else {
//                                   res.redirect('/login')
//                               }
//                           }
//                       });
//                   }
//               })
//               .catch(err => {
//                   console.error(err);
//               });
//       }
//   }
//   catch (err) {
//       res.status(401).send('<h2 style="color: orange;">Liên kết không hợp lệ hoặc đã hết hạn.</h2><p>Vui lòng liên hệ quản trị viên để nhận liên kết mới.</p>');

//   }
// })

// //logout
// router.all('/logout', function (req, res, next) {
//   res.clearCookie('signed_login');
//   res.redirect('/')
// })

// router.get('/changepassword', function (req, res, next) {
//   if (!req.signedCookies.signed_login) {
//       res.redirect('/login')
//   }
//   res.render('user/changepassword', { title: 'ChangePasswordPage' });
// })

// router.post('/changepassword', function (req, res, next) {
//   const { password, password_new, password_new_recheck } = req.body;
//   if (!password || !password_new || !password_new_recheck) {
//       req.session.flash = {
//           type: 'danger', title: 'Đổi mật khẩu thất bại!!!', message: 'Vui lòng điền đầy đủ thông tin.'
//       };
//       res.redirect('/changepassword')
//   }else{
//       Account.findOne({ username: req.signedCookies.username }).exec()
//           .then(account => {
//               if (!account) {
//                   req.session.flash = {
//                       type: 'danger', title: 'Đổi mật khẩu thất bại!!!', message: 'Username không tồn tại.'
//                   };
//                   res.redirect('/changepassword')
//               } else {
//                   bcrypt.compare(password, account.password, (err, isMatch) => {
//                       if (err) {
//                           console.error(err);
//                           return;
//                       }
//                       if (isMatch) {
//                           if (password_new != password_new_recheck) {
//                               req.session.flash = {
//                                   type: 'danger',
//                                   title: 'Đổi mật khẩu thất bại',
//                                   message: 'Mật khẩu mới và xác nhận mật khẩu mới không giống nhau!'
//                               };
//                               res.redirect('/changepassword');
//                           } else {
//                               //đổi mk trong database
//                               bcrypt.hash(password_new, 10, (err, hash) => {
//                                   if (err) {
//                                       console.error(err);
//                                       return;
//                                   }
//                                   Account.findOneAndUpdate(
//                                       { username: req.signedCookies.username },
//                                       { $set: { password: hash } },
//                                       { new: true }
//                                   )
//                                       .then(updatedAccount => {
//                                           if (updatedAccount) {
//                                               req.session.flash = {
//                                                   type: 'success',
//                                                   title: 'Đổi mật khẩu thành công',
//                                                   message: 'Mật khẩu đã được thay đổi từ giờ bạn có thể sử dụng mật khẩu mới để đăng nhập!'
//                                               };
//                                               res.redirect('/changepassword');
//                                           } else {
//                                               console.log('Account not found with username:', req.signedCookies.username);
//                                               res.redirect('/changepassword');
//                                           }
//                                       })
//                                       .catch(error => {
//                                           console.error('Error updating password:', error);
//                                           res.redirect('/accounts/add');
//                                       });
//                               });
  
//                           }
//                       } else {
//                           req.session.flash = {
//                               type: 'danger', title: 'Đổi mật khẩu thất bại', message: 'Mật khẩu cũ chưa chính xác!'
//                           };
//                           res.redirect('/changepassword');
//                       }
//                   });
//               }
//           })
//           .catch(err => {
//               console.error(err);
//           });
//   }
// })

router.get('/info', function (req, res, next) {
  res.render('info')
});

router.get('/company', function (req, res, next) {
  res.render('company')
});

router.get('/suport', function (req, res, next) {
  res.render('support')
});

router.get('/notification', function (req, res, next) {
  res.render('notification')
});

router.get('/notification-detail', function (req, res, next) {
  res.render('notificationDetail.ejs')
});

router.get('/job-detail', function (req, res, next) {
  res.render('notificationDetail.ejs')
});

module.exports = router;