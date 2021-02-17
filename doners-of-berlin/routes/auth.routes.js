const { Router } = require('express');
const router = new Router();
const passport = require('passport');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
 

router.get('/login', (req, res, next) => res.render('auth/login'));
router.get('/signup', (req, res, next) => res.render('auth/signup'));
 
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    res.render('auth/signup', {
      errorMessage: 'Your password must be 8 characters minimun.'
    });
    return;
  }
  if (username === '') {
    res.render('auth/signup', { errorMessage: 'Your username cannot be empty' });
    return;
  }
  User.findOne({ username: username }).then(found => {
    if (found !== null) {
      res.render('auth/signup', { errorMessage: 'This username is already taken' });
    } else {
      // we can create a user with the username and password pair
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      User.create({ username: username, password: hash })
        .then(dbUser => {
          // login with passport 
          req.login(dbUser, err => {
            if (err) {
              next(err);
            } else {
              res.redirect('/');
            }
          })
        })
        .catch(err => {
          next(err);
        });
    }
  });
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      return next(err);
    }

    if (!theUser) {
      res.render('auth/login', { errorMessage: 'Wrong password or username' });
      return;
    }

    req.login(theUser, err => {
      if (err) {
        return next(err);
      }

      // All good, we are now logged in and `req.user` is now set
      res.redirect('/');
    });
  })(req, res, next);
});


router.get('/logout', (req, res) => {
 
  req.logout();
  res.redirect('/');
})
 
module.exports = router;