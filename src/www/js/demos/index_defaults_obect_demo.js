import _ from 'underscore';
import Backbone from 'backbone';

var Person = Backbone.Model.extend({

	defaults: {
		age: 18
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

var ProgrammingClass = Backbone.Model.extend({

	defaults: {
		students: new People()
	}

});

var progClass1 = new ProgrammingClass();
var progClass2 = new ProgrammingClass();

progClass1.get('students').add(new Person({
	firstName: 'Bob',
	lastName: 'Martin'
}));

console.log(progClass2.get('students').getLastNames());
