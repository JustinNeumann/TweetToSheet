var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {console.log("Hello World");});

router.get('/test', function(req, res) {
	res.send('Hello World (Test)');	
});

module.exports = router;