import _ from 'underscore';
import Backbone from 'backbone';

var shoppingCart = {
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
};

_.extend(shoppingCart, Backbone.Events);

shoppingCart.on('changed', function() {
	shoppingCart.calculateTotal();
});

var prod1 = {
	id: 1,
	name: 'Three Piece Place Setting',
	price: 18.00
};

shoppingCart.add(prod1);

console.log(shoppingCart.total);

shoppingCart.add({
	id: 2,
	name: 'Diamond Ring',
	price: 4500.00
});

console.log(shoppingCart.total);

shoppingCart.remove(prod1);

console.log(shoppingCart.total);
