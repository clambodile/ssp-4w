var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var favicon = require('serve-favicon');
var handlebars = require('express-handlebars');
var helpers = require('./server/helpers.js');

var port = process.env.PORT || 5000;
var app = express();

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('views', './views');
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(session({
  secret: 'weenie hut jr.',
  store: new FileStore,
  resave: false,
  saveUninitialized: false
}));

require('./server/routes.js')(app);

// Make sure all the lesson views are updated before starting the server
helpers.initialize().then(function () {
  app.listen(port);
  console.log('Listening on port:', port);
});
