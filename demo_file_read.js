'use strict';

const fs = require('fs');
const path = require('path');


const loadConfig = new Promise(function(resolve, reject) {

	fs.readFile('./config.json', 'utf-8', function(err, data) {

		if (err) {
			reject(err);
		}

		resolve(JSON.parse(data));
	});

});

loadConfig.then(function(config) {
	console.dir(config);
});

console.log('waiting...');
