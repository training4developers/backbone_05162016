import _ from 'underscore';
import Backbone from 'backbone';

export default _.extend({
	items: [],
	add: function(item) {
		this.items.push(item);
		this.trigger('changed', item);
	},
	remove: function(item) {
		var itemIndex = this.items.indexOf(item);
		this.items.splice(itemIndex, 1);
		this.trigger('changed', item);
	},
	total: 0,
	calculateTotal: function() {
		this.total = _.reduce(this.items, function(total, item) {
			return total + item.price;
		},0);
	}
}, Backbone.Events);
