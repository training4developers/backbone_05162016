import $ from 'jquery';
import Backbone from 'backbone';
import tableTemplate from '../../tpls/table.hbs';

export default Backbone.View.extend({

	tagName: 'table',

	events: {
		'click [action-edit]': 'editRow'
	},

	editRow: function(e) {
		this.trigger('edit-row', $(e.target).closest('tr').prop('model'));
	},

	initialize: function(options) {
		this.options = options;
		this.headerRow = null;
		this.detailRows = [];
	},

	remove: function() {
		this.headerRow.remove();
		this.detailRows.forEach(detailRow => {
			detailRow.remove();
		});
		Backbone.View.prototype.remove.call(this);
	},

	renderDetails: function() {

		this.collection.forEach(model => {
			var detailRow = new this.options.detailView({
				container: this.tbody,
				model: model
			});
			detailRow.render();
			this.detailRows.push(detailRow);
		});

	},

	render: function() {

		this.$el.html(tableTemplate());
		this.thead = this.$el.find('thead');
		this.tbody = this.$el.find('tbody');

		this.headerRow = new this.options.headerView({
			container: this.thead
		});
		this.headerRow.render();

		this.renderDetails();

		$(this.options.container).append(this.$el);

	}


});
