import $ from 'jquery';
import Backbone from 'backbone';
import widgetRowTemplate from '../../tpls/widget-row.hbs';

export default Backbone.View.extend({

	tagName: 'tr',

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.prop('model', this.model);
		this.$el.html(widgetRowTemplate(this.model.toJSON()));
		$(this.options.container).append(this.$el);
	}

});
