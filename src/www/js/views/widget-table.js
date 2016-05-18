import $ from 'jquery';
import Backbone from 'backbone';
import WidgetRowView from './widget-row';
import widgetTableTemplate from '../../tpls/widget-table.hbs';

export default Backbone.View.extend({

	tagName: 'table',

	initialize: function(options) {
		this.options = options;
	},

	render: function() {

		this.$el.html(widgetTableTemplate());

		var tbody = this.$el.find('tbody');

		this.collection.forEach(model => {
			var widgetRow = new this.options.widgetRowView({
				container: tbody,
				model: model
			});
			widgetRow.render();
		});

		$(this.options.container).append(this.$el);

	}


});
