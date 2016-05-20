import Widgets from './collections/widgets';
import Widget from './models/widget';
//
// var widget = new Widget({
// 	id:2
// });
//
// widget.fetch({
// 	success: function(model) {
// 		console.dir(model);
// 	}
// });


// function getResults() {
//
// 	return new Promise(function(resolve, reject) {
//
// 		var widgets = new Widgets();
// 		widgets.fetch({
// 			success: function(collection, results, xhr) {
// 				resolve(results);
// 			}
// 		});
//
// 	});
//
// }

// create a getWidgets function which return a Promise
// when resolved, output the results

// getWidgets().then(function(results) {
// 	console.dir(results);
// });

import io from 'socket.io-client';

const socket = io();
const widgets = new Widgets();

widgets.on('add', function() {
	console.log('new widget added');
});

socket.on('event', function(msg) {
	var widget = new Widget(JSON.parse(msg));
	widgets.add(widget);
});

socket.emit('test','');

//socket.emit('echo', 'Hi!');
