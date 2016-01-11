var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : 5432,
    user     : 'jroel',
    database : ''
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Linked In Login App' });
});

module.exports = router;
