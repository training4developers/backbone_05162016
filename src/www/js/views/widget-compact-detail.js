import $ from 'jquery';
import Backbone from 'backbone';
import widgetRowTemplate from '../../tpls/widget-compact-row.hbs';

export default Backbone.View.extend({

	tagName: 'tr',

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html(widgetRowTemplate(this.model.toJSON()));
		$(this.options.container).append(this.$el);
	}

});
