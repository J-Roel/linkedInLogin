var express = require('express');
var router = express.Router();
var passport = require('passport');

// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host     : process.env.DB_HOST,
//     port     : process.env.DB_PORT,
//     user     : process.env.DB_USER,
//     database : process.env.DB_NAME
//   }
// });

router.get('/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});






module.exports = router;











