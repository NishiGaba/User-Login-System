var express = require('express');
var router = express.Router();

var User = require('../models/user');

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

router.post('/register',function(req,res,next) {

	console.log('###', req.files);

	//Get Form Values
	var name 			=	 req.body.name;
	var email 			=	 req.body.email;
	var username 		=	 req.body.username;
	var password 		=	 req.body.password;
	var confirmPassword	=	 req.body.confirmPassword;


	//Check for IMage Field
	if(req.files.length != 0) {

		console.log('uploading');

		var profileImageOriginalName  = 	req.files[0].originalname;
		var profileImageName 		  =		req.files[0].originalname
		var profileImageMime 		  =		req.files[0].mimeType;
		var profileImagePath 		  =		req.files[0].path;
		var profileImageSize 		  =		req.files[0].size;

	} else {
		//Set a Default Image
		var profileImageName 		  = 	'noImage.png';
	}

	//form Validation using Express-Validator
	req.checkBody( 'name','Name Field is Required').notEmpty();
	req.checkBody( 'email','Email Field is Required').notEmpty();
	req.checkBody('email','Email not Valid').isEmail();
	req.checkBody('username','Username Field is Required').notEmpty();
	req.checkBody('password','Password Field is Required').notEmpty();
	req.checkBody('confirmPassword','Passwords do not Match').equals(req.body.password);

	//Check for Errors
	var errors = req.validationErrors();

	if(errors) {
		res.render('register',{
			errors 			: 	errors,
			name 			: 	name,
			email 			: 	email,
			username 		: 	username,
			password 		: 	password,
			confirmPassword : 	confirmPassword
		});
	} else {
		//CReating a MOdal for New User
		console.log('#', name, email, username, password, profileImageName);
		var newUser	= new User({
			name 		: 	name,
			email 		: 	email,
			username 	: 	username,
			password 	: 	password,
			profile 	:   profileImageName
		});

		//Create User
		console.log( newUser );
		newUser.save(newUser,function(err,user) {
			if(err)  throw err;
			console.log(user);
		});

		//Success Message
		req.flash('success','You are now registered and may log in');

		res.location('/');
		res.redirect('/');
	}

});


module.exports = router;
