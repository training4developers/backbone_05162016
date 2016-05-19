import './template-cache';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

var colors = new Backbone.Collection();
colors.add(new Backbone.Model({ id: 'red', name: 'Red' }));
colors.add(new Backbone.Model({ id: 'white', name: 'White' }));
colors.add(new Backbone.Model({ id: 'blue', name: 'Blue' }));

var ColorView = Marionette.ItemView.extend({
	tagName: 'li',
	template: 'list-item'
});

var ColorsView = Marionette.CollectionView.extend({
	tagName: 'ul',
	childView: ColorView
});

var colorsView = new ColorsView({
	collection: colors
});

colorsView.render();
$('main').append(colorsView.el);

// const App = Marionette.Application.extend({
//
// 	initialize: function(options) {
// 		console.dir(options);
// 	}
//
// });

// const RootView = Marionette.LayoutView.extend({
// 	el: 'main',
//
//
// });

// const app = new App({
// 	container: 'main'
// });
//
// app.start();
