var express = require('express');
var router = express.Router();

/* Member's Page */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Home' });
});

function ensureAuthenticated(req,res,next) {
	if(req.isAuthenticated()) {
		return next();
	}
	req.flash('error','You have to Login First.');
	res.redirect('/users/login');
}

module.exports = router;
