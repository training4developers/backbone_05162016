import $ from 'jquery';
import Backbone from 'backbone';
import widgetCompactHeader from '../../tpls/widget-compact-header.hbs';

export default Backbone.View.extend({

	tagName: 'tr',

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html(widgetCompactHeader());
		$(this.options.container).append(this.$el);
	}

});
