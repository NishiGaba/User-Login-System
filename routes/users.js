var express 		=	require('express');
var router 			= 	express.Router();

var User 			= 	require('../models/user');
var bcrypt 			= 	require('bcrypt');
var passport		= 	require('passport');
var localStrategy	=	require('passport-local').Strategy;

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
		var newUser	= new User({
			name 		: 	name,
			email 		: 	email,
			username 	: 	username,
			password 	: 	password,
			profile 	:   profileImageName
		});

		//Create User
		console.log( newUser );
		
		var salt = 10;

		bcrypt.hash(newUser.password,salt, function(err,hash) {
			if(err) throw err;

			//Set Hashed Password
			newUser.password = hash;

			//Create New User
			newUser.save(newUser,function(err,user) {
				if(err)  throw err;
				console.log(user);
			});

			//Success Message
			req.flash('success','You are now registered and may log in');

			res.location('/');
			res.redirect('/');
			});
	}

});


//Flow (IV) [Passport creating a Session for Current Logged in User By Serializing it.]
passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//Flow (III)
var comparePassword = function(candidatePassword,hash,callback) {

	bcrypt.compare(candidatePassword,hash,function(err, isMatch) {
		if(err) return callback(err);
		callback(null,isMatch);
	});

}


//Flow (II)
passport.use(new localStrategy(
	function(username, password, done) {
		User.find({username : username}, function(err,user) {
			
			if(err) throw err;
			if(user.length == 0) {
				console.log('Unknown User');
				return done(null,false,{message: 'Unknown User'});
			} 
			
			comparePassword(password,user[0].password, function(err,isMatch) {
				if(err) throw err;
				if(isMatch) {
					return done(null, user);
					res.redirect('/');
				} else {
					console.log('Invalid Password');
					return done(null, false, {message: 'Invalid Password'});
				}
			})
		});
}));

//Flow (I)
router.post('/login',passport.authenticate('local',{failureRedirect:'/users/login',failureFlash:'Invalid Username or Password'}), function(req,res) {

	//If Local Strategy Comes True
	console.log('Authentication Successful');
	req.flash('success','You are Logged In');
	res.redirect('/');

});

router.get('/logout', function(req,res) {
	req.logout();
	req.flash('success','You have logged out');
	res.redirect('/users/login');
});


module.exports = router;
