var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send('Respond with a resource');
});

router.get('/register', function(req, res, next) {
 res.render('register',{
 	'title': 'Register'
 });
});

router.get('/login', function(req, res, next) {
 res.render('login',{
 	'title': 'Login'
 });
});



module.exports = router;
