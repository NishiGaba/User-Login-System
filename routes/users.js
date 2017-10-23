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

router.post('/register',function(req,res,next) {

	//Get Form Values
	var name 		=	 req.body.name;
	var email 		=	 req.body.email;
	var username 	=	 req.body.username;
	var password 	=	 req.body.password;
	var confirmPass	=	 req.body.confirmPassword;


	//Check for IMage Field
	if(req.files) {
		if(req.files.profile) {

			console.log('uploading');

			var profileImageOriginalName  = 	req.files.profile.originalname;
			var profileImageName 		  =		req.files.profile.name;
			var profileImageMime 		  =		req.files.profile.mimeType;
			var profileImagePath 		  =		req.files.profile.path;
			var profileImageExt 		  =		req.files.profile.extension;
			var profileImageSize 		  =		req.files.profile.size;

		} else {
			//Set a Default Image
			var profileImageName 		  = 	'noImage.png';
		}
	} else {
		//Set a Default Image
		var profileImageName 		  = 	'noImage.png';
	}

	//form Validation using Express-Validator
	req.checkBody('name','Name Field is Required').notEmpty();
	req.checkBody('email','Email Field is Required').notEmpty();
	req.checkBody('email','Email not Valid').isEmail();
	req.checkBody('username','Username Field is Required').notEmpty();
	req.checkBody('password','Password Field is Required').notEmpty();
	req.checkBody('confirmPass','Passwords do not Match').equals(req.body.password);

	//Check for Errors
	var errors = req.validationErrors();

	if(errors) {
		res.render('register',{
			errors 		: 	errors,
			name 		: 	name,
			email 		: 	email,
			username 	: 	username,
			password 	: 	password,
			confirmPass : 	confirmPass
		});
	} else {
		//CReating a MOdal for New User
		var newUser	= new User({
			name 		: 	name,
			email 		: 	email,
			username 	: 	username,
			password 	: 	password,
			profile 	:   profileImageName
		});

		//Create User
		User.createUser(newUser,function(err,user) {
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
