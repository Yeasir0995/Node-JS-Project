var express = require('express');
var router = express.Router();
var customerModel = require.main.require('./models/patient-model');

router.get('*', function (req, res, next) {
	if (req.cookies['uname'] == null) {
		res.redirect('/login');
	} else {
		next();
	}
});
router.get('/', function (req, res) {
	patientModel.getByUname(req.cookies['uname'], function (result) {
		res.render('patient/index', {
			user: result
		});
	});
});

router.get('/profile', function (req, res) {
	patientModel.getByUname(req.cookies['uname'], function (result) {
		res.render('patient/profile', {
			user: result
		});
	});

});
router.post('/profile', function (req, res) {
	if (req.body.password == req.body.cpassword) {
		var user = {
			fname: req.body.fname,
			lname: req.body.lname,
			username: req.body.uname,
			fathersName: req.body.fathersName,
			email: req.body.email,
			phone: req.body.phone,
			nid: req.body.nid,
			password: req.body.password,
			area: req.body.area
		};

		patientModel.updateProfile(user, function (status) {
			if (status) {
				res.redirect('/	patient');
			} else {
				res.redirect('/	patient/profile');
			}
		});
	} else {
		res.send('password mismatch');
	}
});
router.get('/pendingPatient', function (req, res) {
	patientModel.getAllPendingPatient(function (results) {
		if (results.length > 0) {
			res.render('patient/pendingPatient', {
				userlist: results
			});
		} else {
			res.render('patient/pendingPatient', {
				userlist: results
			});
		}
	});

});
router.get('/pendingHouseowners', function (req, res) {
	patientModel.getAllPendingHouseowner(function (results) {
		if (results.length > 0) {
			res.render('patient/pendingHouseowners', {
				userlist: results
			});
		} else {
			res.render('patient/pendingHouseowners', {
				userlist: results
			});
		}
	});

});
router.get('/pendingPatient/accept/:username', function (req, res) {
	patientModel.acceptPatient(req.params.username, function (status) {
		if (status) {
			res.redirect('/	patient/pendingPatient');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingPatient/reject/:username', function (req, res) {
	patientModel.deletePatient(req.params.username, function (status) {
		if (status) {
			res.redirect('/patient/pendingPatient');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingHouseowners/accept/:username', function (req, res) {
	patientModel.acceptHouseOwner(req.params.username, function (status) {
		if (status) {
			res.redirect('/patient/pendingHouseowners');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingHouseowners/reject/:username', function (req, res) {
	patientModel.deleteHouseOwner(req.params.username, function (status) {
		if (status) {
			res.redirect('/patient/pendingHouseowners');
		} else {
			res.send('error');
		}
	});
});
router.get('/view_Customers', function (req, res) {
	patientModel.getAllAvailablePatient(function (results) {
		if (results.length > 0) {
			res.render('patient/view_Patient', {
				userlist: results
			});
		} else {
			res.render('customer/view_Patient', {
				userlist: results
			});
		}
	});

});
router.get('/view_Owners', function (req, res) {
	patientModel.getAllAvailableHouseowner(function (results) {
		if (results.length > 0) {
			res.render('patient/view_Owners', {
				userlist: results
			});
		} else {
			res.render('patient/view_Owners', {
				userlist: results
			});
		}
	});

});
router.get('/view_Customers/:username', function (req, res) {
	PatientModel.getPatientProfile(req.params.username, function (result) {
		res.render('patient/getProfile', {
			user: result,
			table: 'patientinfo'
		});
	});

});
router.get('/view_Owners/:username', function (req, res) {
	patientModel.getOwnersProfile(req.params.username, function (result) {
		res.render('patient/getProfile', {
			user: result,
			table: 'houseownerinfo'
		});
	});

});
//block unblock
router.get('/houseownerinfo/:username', function (req, res) {
	patientModel.getOwnersProfile(req.params.username, function (result) {
		if (result.status == "block") {
			var user = {
				username: req.params.username,
				status: 'unblock'
			};
		} else {
			var user = {
				username: req.params.username,
				status: 'block'
			};
		}
		patientModel.houseOwnersStatus(user, function (status) {
			if (status) {
				customerModel.getOwnersProfile(req.params.username, function (result) {
					res.render('patient/getProfile', {
						user: result,
						table: 'houseownerinfo'
					});
				});
			} else {
				res.send('error');
			}
		});

	});
});
router.get('/customerinfo/:username', function (req, res) {
	patientModel.getPatientProfile(req.params.username, function (result) {
		if (result.status == "block") {
			var user = {
				username: req.params.username,
				status: 'unblock'
			};
		} else {
			var user = {
				username: req.params.username,
				status: 'block'
			};
		}
		patientModel.patientStatus(user, function (status) {
			if (status) {
				customerModel.getPatientProfile(req.params.username, function (result) {
					res.render('patient/getProfile', {
						user: result,
						table: 'patientinfo'
					});
				});
			} else {
				res.send('error');
			}
		});

	});
});
router.get('/view_Rented', function (req, res) {
	patientModel.getAllRentedHouse(function (results) {
		if (results.length > 0) {
			res.render('patient/view_Rented', {
				userlist: results
			});
		} else {
			res.render('patient/view_Rented', {
				userlist: results
			});
		}
	});

});
router.get('/view_Available', function (req, res) {
	patientModel.getAllAvailableHouse(function (results) {
		if (results.length > 0) {
			res.render('patient/view_Available', {
				userlist: results
			});
		} else {
			res.render('patient/view_Available', {
				userlist: results
			});
		}
	});

});
router.get('/view_Rented/:id', function (req, res) {
	patientModel.deleteHouse(req.params.id, function (status) {
		if (status) {
			res.redirect('/patient/view_Rented');
		} else {
			res.send('error');
		}
	});
});
router.get('/view_Available/:id', function (req, res) {
	patientModel.deleteHouse(req.params.id, function (status) {
		if (status) {
			res.redirect('/patient/view_Available');
		} else {
			res.send('error');
		}
	});
});
module.exports = router;