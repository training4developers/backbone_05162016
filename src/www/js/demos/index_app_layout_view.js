import './template-cache';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Widgets from './collections/widgets';
import Widget from './models/widget';

var widgets = new Widgets([
	new Widget({ id: 1, name: 'Sprocket', color: 'red', size: 'large', quantiy: 10 }),
	new Widget({ id: 2, name: 'Thingy', color: 'blue', size: 'small', quantiy: 30 }),
	new Widget({ id: 3, name: 'Doohickey', color: 'green', size: 'medium', quantiy: 20 })
]);

const HeaderView = Marionette.ItemView.extend({
	template: 'header'
});

const FooterView = Marionette.ItemView.extend({
	template: 'footer'
});

const App = Marionette.Application.extend({

	initialize: function(options) {
		console.log('init');
		this.rootView = new RootView();
		this.rootView.render();
		$(options.container).append(this.rootView.el);

		this.rootView.header.show(new HeaderView());
		this.rootView.footer.show(new FooterView());
	}

});

const RootView = Marionette.LayoutView.extend({

	template: 'layout',

	regions: {
		header: 'header',
		main: 'main',
		footer: 'footer'
	}

});

const app = new App({
	container: '#app'
});

app.start();
