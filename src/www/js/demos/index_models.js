import _ from 'underscore';
import Backbone from 'backbone';

import shoppingCart from './shopping_cart';

var Person = Backbone.Model.extend({

	defaults: {
		age: 18,
		gender: 'female',
		breathing: true
	},

	getFullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}

});

var person = new Person({
	id: 1,
	firstName: 'Elaine',
	lastName: 'Lau',
	age: 24
});

person.set('middleName', 'Willie');
person.set('lastName', 'Chow');

// person.on('change:firstName', function(model, newValue) {
// 	console.dir(model);
// 	console.log(model.attributes.firstName);
// 	console.log(newValue);
// });
//
// person.set('firstName', 'Bob');

console.log(person.id);
console.dir(person);
