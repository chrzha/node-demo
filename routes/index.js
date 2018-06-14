var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {
    title: 'Index',
    users: [
      {'name': 'a', 'age': 1, 'gender': 'M'},
      {'name': 'b', 'age': 1, 'gender': 'M'},
      {'name': 'c', 'age': 1, 'gender': 'M'},
      {'name': 'd', 'age': 1, 'gender': 'M'},
      {'name': 'e', 'age': 1, 'gender': 'M'},
      {'name': 'f', 'age': 1, 'gender': 'M'}
    ],
    total: 100
  };
  res.render('index', obj);
});

module.exports = router;
