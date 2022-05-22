require('dotenv').config();

const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const initializePassport = require('./passport-config');

const users = [
	{ id: '1562709592702', usernameLogin: 'admin', passwordLogin: 'admin' }, // zdaję sobie sprawę że w prawdziwej aplikacji nie wolno tak robić
];

initializePassport(passport, users);

mongoose.connect(process.env.MONGO_URL, (err) => {
	if (err) {
		console.log('Database connection error:' + err);
	} else {
		console.log('<-- Database connected -->');
	}
});

var indexRouter = require('./routes/index');
var addAdRouter = require('./routes/addAd');
var adminRouter = require('./routes/admin');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var addItemRouter = require('./routes/addItem');
var deleteItemRouter = require('./routes/deleteItem');
var searchRouter = require('./routes/search');
var moreInfoRouter = require('./routes/moreInfo');

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
// app.use('/moreInfo', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/addAd', addAdRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/addItem', addItemRouter);
app.use('/deleteItem', deleteItemRouter);
app.use('/search', searchRouter);
app.use('/moreInfo', moreInfoRouter);

app.listen(port, () => console.info(`<-- Listening on port ${port} -->`));
