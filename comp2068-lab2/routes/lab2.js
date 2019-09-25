'use strict';
var express = require('express');
var router = express.Router();

/* GET lab2 page. */
router.get('/', function (req, res) {
	if (req.query.method) {
		
		switch (req.query.method) {
			case 'add':
				if (req.query.x != null && req.query.y) {
					var x = parseFloat(req.query.x);
					var y = parseFloat(req.query.y);
					var sum = x + y;
					res.send('Output: ' + x.toString() + ' + ' + y.toString() + ' = ' + sum.toString());
				}
				else {
					res.send('Please enter values.');
				}
				break;
			case 'subtract':
				if (req.query.x != null && req.query.y) {
					var x = parseFloat(req.query.x);
					var y = parseFloat(req.query.y);
					var subtract = x - y;
					res.send('Output: ' + x.toString() + ' - ' + y.toString() + ' = ' + subtract.toString());
				}
				else {
					res.send('Please enter values.');
				}
				break;
			case 'multiply':
				if (req.query.x != null && req.query.y) {
					var x = parseFloat(req.query.x);
					var y = parseFloat(req.query.y);
					var multiply = x * y;
					res.send('Output: ' + x.toString() + ' * ' + y.toString() + ' = ' + multiply.toString());
				}
				else {
					res.send('Please enter values.');
				}
				break;
			case 'divide':
				if (req.query.x != null && req.query.y) {
					var x = parseFloat(req.query.x);
					var y = parseFloat(req.query.y);
					var divide = x / y;
					res.send('Output: ' + x.toString() + ' / ' + y.toString() + ' = ' + divide.toString());
				}
				else {
					res.send('Please enter values.');
				}
				break;
			default:
				res.send('Please select method first.');
		}
	}
	else {
		res.send('Welcome to Lab2');
	}
});

module.exports = router;