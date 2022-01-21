var express = require('express');
const { listen } = require('express/lib/application');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var Router = require('express').Router();
var getmovies = require('../movies');

Router.route('/')
  .get(getmovies.allMovies);

module.exports = router;
