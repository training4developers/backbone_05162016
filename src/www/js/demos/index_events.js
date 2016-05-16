import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'marionette';
import SampleTpl from '../tpls/sample.hbs';


// mixin pattern
var parent = _.extend({}, Backbone.Events);

var child = _.extend({}, Backbone.Events);

parent.on("some event", function() {
	// do something
});

parent.listenTo(child, 'good', function() {
	console.log('praise the child...');
});

setTimeout(function() {

	console.log('elained cleaned the house');
	child.trigger('good', {
		message: 'cleaned the whole house'
	});

}, 2000);

console.log('waiting for Elaine to clean...');




// console.dir(Backbone.Events);
// console.dir(parent);
// console.log(Backbone.Events === parent);
// console.log(Backbone.Events.on === parent.on);
