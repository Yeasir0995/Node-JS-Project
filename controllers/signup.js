var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var signupModel = require.main.require('./models/signup-model');
const {
	check,
	validationResult
} = require('express-validator');
const {
	matchedData,
	sanitizeBody
} = require('express-validator');
var urlencodedParser = bodyParser.urlencoded({
	extended: true
});
router.get('/', function (req, res) {
	var user = {
		fname: null,
		lname: null,
		uname: null,
		password: null,
		//fathersName: null,
		email: null,
		phone: null,
	//	nid: null,
		password: null
	};
	var error = user;
	res.render('signup/index', {
		user: user,
		error: error
	});
});

router.post('/', urlencodedParser, [
	check('fname', 'First Name must be in upperCase').isUppercase(),
	check('lname', 'Last Name must be in upperCase').isUppercase(),
	check('uname', 'Last Name must be in lowerCase').isLowercase(),
	check('email', 'Email must be in ex:somethin@example.com').isEmail(),
	check('usertype', 'must select').not().isEmpty(),
	check('phone', 'must be number').isInt(),
	check('phone', 'Length must be 11').isLength({
		min: 11,
		max: 11
	}),
/*	check('nid', 'must be number').isInt(),
	check('nid', 'Length must be 17').isLength({
		min: 17,
		max: 17
		*/
	
	check('password', 'password must be at least 8 chars long').isLength({
		min: 8
	}).custom((value, {
		req,
		loc,
		path
	}) => {
		if (value !== req.body.cpassword) {
			throw new Error("Passwords don't match");
		} else {
			return value;
		}
	}),
], function (req, res) {
	const error = validationResult(req);
	var user = {
		fname: req.body.fname,
		lname: req.body.lname,
		uname: req.body.uname,
		usertype: req.body.usertype,
		password: req.body.password,
		//fathersName: req.body.fathersName,
		email: req.body.email,
		phone: req.body.phone,
		//nid: req.body.nid
	};
	if (error.isEmpty()) {
		signupModel.insert(user, function (status) {
			if (status) {
				res.render('signup/success');
			} else {
				res.render('signup/index', {
					user: user,
					error: error.mapped()
				});

			}
		});
	} else {
		res.render('signup/index', {
			user: user,
			titile: "sigup details",
			error: error.mapped()
		});
	}

});
module.exports = router;