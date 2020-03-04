var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/posts',
    failureRedirect : '/posts'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
module.exports = router;
