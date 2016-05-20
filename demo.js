'use strict';

var p1 = new Promise(function(resolve) {
	setTimeout(resolve, 2000);
});

var p2 = new Promise(function(resolve) {
	setTimeout(resolve, 4000);
});

var p3 = new Promise(function(resolve) {
	setTimeout(resolve, 6000);
});

p1.then(function() {
	console.log('p1 resolved');
});

p2.then(function() {
	console.log('p2 resolved');
});

p3.then(function() {
	console.log('p3 resolved');
});

Promise.all([p1, p2, p3]).then(function() {
	console.log('all have been resolved');
});
