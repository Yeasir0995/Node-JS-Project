var express = require('express');
var router = express.Router();
var managerModel = require.main.require('./models/doctor-model');
var adminModel = require.main.require('./models/admin-model');
var customerModel=require.main.require('./models/patient-model');
router.get('/', function (req, res) {
	res.render('login/index');
});

router.post('/', function (req, res) {
	if (req.body.usertype == "Admin") {
		var user = {
			username: req.body.username,
			password: req.body.password
		};
		adminModel.validate(user, function (status) {
			if (status) {
				res.cookie('username', req.body.username);
				res.redirect('/admin');
			} else {
				res.render('login/error');
			}
		});
	} else if (req.body.usertype == "doctor") {
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		managerModel.validate(user, function (status) {
			if (status) {
				res.cookie('uname', req.body.uname);
				res.redirect('/doctor');
			} else {
				res.render('login/error');
			}
		});
	} else if (req.body.usertype == "House Provider") {
		res.render('houseprovider/index');
	} else if (req.body.usertype == "Customer") {
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		customerModel.validate(user, function (status) {
			if (status) {
				res.cookie('uname', req.body.uname);
				res.redirect('/customer');
			} else {
				res.render('login/error');
			}
		});
	} else {
		res.send('invalid username/password');
	}
});

module.exports = router;