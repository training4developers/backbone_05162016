'use strict';

// setTimeout(function() {
// 	resolve();
//
// 		setTimeout(function() {
// 			resolve();
//
// 				setTimeout(function() {
// 					resolve();
//
// 						setTimeout(function() {
// 							resolve();
// 						}, 2000);
//
// 				}, 2000);
//
// 		}, 2000);
//
// }, 2000);

var p = new Promise(function(resolve) {

	setTimeout(function() {
		resolve();
	}, 2000);

});

p.then(function() {

	console.log('resolved...');

	throw new Error("the world is ending...");

	return new Promise(function(resolve) {

		setTimeout(function() {
			resolve();
		}, 2000);

	});

}).then(function() {

	console.log('resolved2...');

	return new Promise(function(resolve) {

		setTimeout(function() {
			resolve();
		}, 2000);

	});

}).then(function() {
	console.log('resolved3...');
}).catch(function(result) {
	console.log('error occurred');
});
