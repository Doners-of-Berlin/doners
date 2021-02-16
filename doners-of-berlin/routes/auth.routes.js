const { Router } = require('express');
const router = new Router();
const passport = require('passport');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
 
router.get('/signup', (req, res, next) => res.render('auth/signup'));
 
router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
 

  if (!username || !password) {
    res.render('auth/signup', { errorMessage: 'Indicate username and password' });
    return;
  }
 
  User.findOne({ username })
    .then(user => {
    
      if (user !== null) {
        res.render('auth/signup', { message: 'The username already exists' });
        return;
      }
     
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
 
      const newUser = new User({
        username,
        password: hashPass
      });
 
      newUser
        .save()
        .then(() => res.redirect('/'))
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

router.get('/login', (req, res, next) => res.render('auth/login'));
 
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    passReqToCallback: true
  })
);


router.get('/logout', (req, res) => {
 
  req.logout();
  res.redirect('/');
})
 
module.exports = router;