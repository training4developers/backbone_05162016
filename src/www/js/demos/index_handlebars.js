import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import sampleTpl from '../tpls/sample.hbs';

console.log(sampleTpl({
	message: 'Willie Rocks!',
	people: [
		{ firstName: 'Bob', lastName: 'Martin' },
		{ firstName: 'Tina', lastName: 'Martin' }
	]
}))

var HelloWorld = Backbone.View.extend({

	id: 'aaron',
	tagName: 'header',
	className: 'tech-stars',

	events: {
		'click button': 'clickMe'
	},

	clickMe: function() {
		console.log('I was clicked!');
		this.trigger('click-me');
	},

	render: function(selector) {
		this.$el.append('<h1>Hello Tech Stars!</h1><button>Click Me!</button>');
		$(selector).append(this.el);
	}

});

var helloWorld = new HelloWorld();
helloWorld.render('main');
helloWorld.on('click-me', function() {
	console.log('hello world emitted a click-me event');
});

helloWorld.undelegateEvents();

setTimeout(function() {
	helloWorld.delegateEvents();
}, 5000);


console.dir(helloWorld);
