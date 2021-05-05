//declaration
var express = require('express');
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var signup = require('./controllers/signup');
var admin = require('./controllers/admin/admin');
var doctor = require('./controllers/doctor/doctor');
var patient = require('./controllers/patient/patient');
var receptionist= require('./controllers/receptionist/receptionist');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
const toastr = require('express-toastr');
//configuration
app.set('view engine', 'ejs');


//middleware 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use('/public', express.static(process.cwd() + '/public'));

//app.use(bodyParser());
app.use('/login', login);
app.use('/signup', signup);
app.use('/admin', admin);
app.use('/doctor', doctor);
app.use('/patient', patient);
app.use('/receptionist', receptionist);
app.use('/logout', logout);

//routes
app.get('/', function (req, res) {
	res.render('welcome/index');
});

//server startup
app.listen(3000, function () {
	console.log('node server started at 3000!');
});