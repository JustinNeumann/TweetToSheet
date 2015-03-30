var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index.js');
var users = require('./routes/users.js');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var GoogleSpreadsheet = require("google-spreadsheet");

function saveTweetToSheet(obj) 
{
	var testsheet = new GoogleSpreadsheet('YOUR SPREADSHEET KEY');
	
	// set auth to be able to edit/add/delete 
	testsheet.setAuth('YOUR GMAIL EMAIL ADDRESS','YOUR (APPLICATION-SPECIFIC) PASSWORD', function(err)
	{
		
		if (err) console.log(err);
		testsheet.getInfo( function(err, ss_info)
		{
			//console.log( ss_info.title + ' is loaded' );
		});
		
		var data = {};
		var result = "";
		for (var p in obj) 
		{
			if( obj.hasOwnProperty(p) )
			{
				result += p + " , " + obj[p] + "\n";
				if (p == 'timestamp_ms')
				{
					var date = new Date(parseInt(obj[p]));
					data[p] = date.toJSON();
				}
				else
				{
					data[p] = obj[p];
				}
			}
		}
		
		// you can also add and read rows by just indicating the worksheet id (starts at 1)
		//console.log(data.timestamp_ms);
		testsheet.addRow( 1, data, function() {});
		
	});
	return;
}

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'CONSUMER KEY',
	consumer_secret:      'CONSUMER SECRET',
	access_token:         'ACCESS TOKEN',
	access_token_secret:  'ACCESS TOKEN SECRET'
});
	
//
//  filter the twitter public stream by the word 'example'.
//
var stream = T.stream('statuses/filter', { track: ['predictive', 'analytics', 'data science'] });

module.exports = app;