var express = require('express');
var router = express.Router();
var doctorModel = require.main.require('./models/doctor-model');

router.get('*', function (req, res, next) {
	if (req.cookies['uname'] == null) {
		res.redirect('/login');
	} else {
		next();
	}
});
router.get('/', function (req, res) {
	doctorModel.getByUname(req.cookies['uname'], function (result) {
		res.render('doctor/index', {
			user: result
		});
	});
});

router.get('/profile', function (req, res) {
	doctorModel.getByUname(req.cookies['uname'], function (result) {
		res.render('doctor/profile', {
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

		doctorModel.updateProfile(user, function (status) {
			if (status) {
				res.redirect('/doctor');
			} else {
				res.redirect('/doctor/profile');
			}
		});
	} else {
		res.send('password mismatch');
	}
});
router.get('/pendingPatient', function (req, res) {
	doctorModel.getAllPendingPatient(function (results) {
		if (results.length > 0) {
			res.render('doctor/pendingPatient', {
				userlist: results
			});
		} else {
			res.render('doctor/pendingPatient', {
				userlist: results
			});
		}
	});

});
router.get('/pendingHouseowners', function (req, res) {
	doctorModel.getAllPendingHouseowner(function (results) {
		if (results.length > 0) {
			res.render('manager/pendingHouseowners', {
				userlist: results
			});
		} else {
			res.render('manager/pendingHouseowners', {
				userlist: results
			});
		}
	});

});
router.get('/pendingPatient/accept/:username', function (req, res) {
	doctorModel.acceptPatient(req.params.username, function (status) {
		if (status) {
			res.redirect('/doctor/pendingPatient');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingPatient/reject/:username', function (req, res) {
	doctorModel.deletePatient(req.params.username, function (status) {
		if (status) {
			res.redirect('/doctor/pendingPatient');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingHouseowners/accept/:username', function (req, res) {
	doctorModel.acceptHouseOwner(req.params.username, function (status) {
		if (status) {
			res.redirect('/doctor/pendingHouseowners');
		} else {
			res.send('error');
		}
	});
});
router.get('/pendingHouseowners/reject/:username', function (req, res) {
    doctorModel.deleteHouseOwner(req.params.username, function (status) {
		if (status) {
			res.redirect('/doctor/pendingHouseowners');
		} else {
			res.send('error');
		}
	});
});
router.get('/view_Patient', function (req, res) {
	doctorModel.getAllAvailablePatient(function (results) {
		if (results.length > 0) {
			res.render('doctor/view_Patient', {
				userlist: results
			});
		} else {
			res.render('doctor/view_Patient', {
				userlist: results
			});
		}
	});

});
router.get('/view_Owners', function (req, res) {
	doctorModel.getAllAvailableHouseowner(function (results) {
		if (results.length > 0) {
			res.render('doctor/view_Owners', {
				userlist: results
			});
		} else {
			res.render('doctor/view_Owners', {
				userlist: results
			});
		}
	});

});
router.get('/view_Customers/:username', function (req, res) {
	doctorModel.getPatientProfile(req.params.username, function (result) {
		res.render('doctor/getProfile', {
			user: result,
			table: 'patientinfo'
		});
	});

});
router.get('/view_Owners/:username', function (req, res) {
	managerModel.getOwnersProfile(req.params.username, function (result) {
		res.render('doctor/getProfile', {
			user: result,
			table: 'houseownerinfo'
		});
	});

});
//block unblock
router.get('/houseownerinfo/:username', function (req, res) {
	doctorModel.getOwnersProfile(req.params.username, function (result) {
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
		doctorModel.houseOwnersStatus(user, function (status) {
			if (status) {
				doctorModel.getOwnersProfile(req.params.username, function (result) {
					res.render('doctor/getProfile', {
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
router.get('/patientinfo/:username', function (req, res) {
	doctorModel.getPatientProfile(req.params.username, function (result) {
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
		doctorModel.patientStatus(user, function (status) {
			if (status) {
				doctorModel.getPatientProfile(req.params.username, function (result) {
					res.render('doctor/getProfile', {
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
	doctorModel.getAllRentedHouse(function (results) {
		if (results.length > 0) {
			res.render('doctor/view_Rented', {
				userlist: results
			});
		} else {
			res.render('doctor/view_Rented', {
				userlist: results
			});
		}
	});

});
router.get('/view_Available', function (req, res) {
	doctorModel.getAllAvailableHouse(function (results) {
		if (results.length > 0) {
			res.render('doctor/view_Available', {
				userlist: results
			});
		} else {
			res.render('doctor/view_Available', {
				userlist: results
			});
		}
	});

});
router.get('/view_Rented/:id', function (req, res) {
	doctorModel.deleteHouse(req.params.id, function (status) {
		if (status) {
			res.redirect('/doctor/view_Rented');
		} else {
			res.send('error');
		}
	});
});
router.get('/view_Available/:id', function (req, res) {
	doctorModel.deleteHouse(req.params.id, function (status) {
		if (status) {
			res.redirect('/doctor/view_Available');
		} else {
			res.send('error');
		}
	});
});
module.exports = router;