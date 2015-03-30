#!/usr/bin/env node
var debug = require('debug')('web');
var app = require('../app.js');

app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function() 
{
	debug('Express server listening on port ' + server.address().port);
	
	stream.on('tweet', function (tweet)
	{
	  //console.log(tweet);
	  if (tweet.text.indexOf('RT') > -1) return;
	  saveTweetToSheet(tweet);
	});
});
