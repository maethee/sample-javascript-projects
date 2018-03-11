/**
 * Sample server
 *
 * @author Maethee
 * @email maethee.chakkuchhantorn@gmail.com
 * */

var express = require('express'),
    path = require('path')
    config = require('config'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    uthMiddleware = require('./app/middlewares/auth'),
    i18n = require('i18n'),
    { logHandle, clientHandle, normallyHandle } = require('./app/middlewares/error-handles');

// create express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', 1);
app.use(express.static(path.join(__dirname, 'public')));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cookieParser());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//i18n
i18n.configure({
    locales: config.lang.locales,
    directory:  __dirname + '/locales',
    fallbacks:{'nl': 'th'},
    defaultLocale: config.lang.default,
    cookie: 'i18n',
    objectNotation : true,
    api: {
        '__': 't'
    }
});
i18n.setLocale('th');

app.use(i18n.init);

//mongodb connection

var options = {
    db: {native_parser: true},
    server: {poolSize: config.mongodb.options.server.poolSize},
    auth: {authdb: config.mongodb.options.auth.authdb}
    //mongos: config.db.options.mongos,
    //authMechanism: config.db.options.authMechanism,
    //readPreference: config.db.options.readPreference,
    //user: config.db.options.user,
    //pass: config.db.options.pass
};

if(config.mongodb.options.user){
    options.user = config.db.options.user;
}

if(config.mongodb.options.pass){
    options.pass = config.db.options.pass;
}

mongoose.connect(config.mongodb.url,
    options, function (err) {

    });

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', function () {
    // listen for requests
    app.listen(3000, function(){
        console.log("Server is listening on port 3000");
    });
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

app.get('/',passport.authenticate('custom-strategy'), function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

//routers
app.use('/', require('./app/routes'));

// handle errors
app.use(logHandle)
app.use(clientHandle)
app.use(normallyHandle)



