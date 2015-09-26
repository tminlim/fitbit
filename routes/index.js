var express = require('express');
var router = express.Router();
var model = require('../model/models.js');
/* GET home page. */
router.get('/', function(req, res, next) {

  model.users.find({}, function (err, data) {
    console.log("model finding");

    res.render('index', { title: 'Express', user: data});
  });
});

module.exports = router;
