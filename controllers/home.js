var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	var data ={
		name: 'alamin',
		id: '',
		data2:{
			version: 2
		}
	};	
	res.render('home/index', data);
});

module.exports = router;