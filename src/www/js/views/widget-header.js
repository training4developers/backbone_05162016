import $ from 'jquery';
import Backbone from 'backbone';
import widgetHeader from '../../tpls/widget-header.hbs';

export default Backbone.View.extend({

	tagName: 'tr',

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html(widgetHeader());
		$(this.options.container).append(this.$el);
	}

});
