var db = require('./db');

module.exports = {
	getPatientProfile: function (username, callback) {
		var sql = "select * from patientinfo where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getOwnersProfile: function (username, callback) {
		var sql = "select * from houseownerinfo where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getAllPendingPatient: function (callback) {
		var sql = "select * from patientinfo where type=?";
		db.getResults(sql, ['pending'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllPendingHouseowner: function (callback) {
		var sql = "select * from houseownerinfo where type=?";
		db.getResults(sql, ['pending'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllAvailableHouseowner: function (callback) {
		var sql = "select * from houseownerinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllAvailablePatient: function (callback) {
		var sql = "select * from patientinfo where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	/*getAllAvailableHouse: function (callback) {
		var sql = "select * from houseinfo where status=?";
		db.getResults(sql, ['available'], function (results) {
			console.log("caught");
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllRentedHouse: function (callback) {
		var sql = "select * from houseinfo where status=?";
		db.getResults(sql, ['rented'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},*/
	validate: function (user, callback) {
		var sql = "SELECT * FROM doctorinfo where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	getByUname: function (username, callback) {
		var sql = "select * from doctorinfo where username=?";
		db.getResults(sql, [username], function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	updateProfile: function (user, callback) {
		var sql = "update doctorinfo set fname=?,lname=?, username=?, password=?, email=?,phone=?,area=?,fathersName=?,nid=? where username=?";
		db.execute(sql, [user.fname, user.lname, user.username, user.password, user.email, user.phone, user.area, user.fathersName, user.nid, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	acceptPatient: function (username, callback) {

		var sql = "update patientinfo set type=? where username=?";
		db.execute(sql, ['available', username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	deletePatient: function (username, callback) {
		var sql = "delete from patientinfo where username=?";
		db.execute(sql, [username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	deleteHouse: function (id, callback) {
		var sql = "delete from houseinfo where houseid=?";
		db.execute(sql, [id], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	acceptHouseOwner: function (username, callback) {

		var sql = "update houseownerinfo set type=? where username=?";
		db.execute(sql, ['available', username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	deleteHouseOwner: function (username, callback) {
		var sql = "delete from houseownerinfo where username=?";
		db.execute(sql, [username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	houseOwnersStatus: function (user, callback) {
		var sql = "update houseownerinfo set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	patientStatus: function (user, callback) {
		var sql = "update patientinfo set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}
}