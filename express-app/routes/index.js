var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dande' });
});

router.get('/profil', function(req, res) {
  res.render('profil',{nama: 'Hamdandi', npm: '2024240030'});
});

module.exports = router;
