import _ from 'underscore';
import Backbone from 'backbone';

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

var People = Backbone.Collection.extend({

	getLastNames: function() {
		return this.models.map(m => m.get('lastName'));
	}

});



var people = new People();

var person1 = new Person({
	//id: 1,
	firstName: 'Elaine',
	lastName: 'Lau',
	age: 24
});

people.add(person1);

people.add(new Person({
	//id: 2,
	firstName: 'Willie',
	lastName: 'Huey',
	age: 23
}));

console.log(people.getLastNames());

//people.remove(person1);

console.dir(people);

person.set('middleName', 'Willie');
person.set('lastName', 'Chow');

person.on('change:firstName', function(model, newValue) {
	console.dir(model);
	console.log(model.attributes.firstName);
	console.log(newValue);
});

person.set('firstName', 'Bob');

console.log(person.id);
console.dir(person);
