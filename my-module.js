'use strict';

let myValue;

// exports.getValue = function() {
// 	return myValue;
// };
//
// exports.setValue = function(theValue) {
// 	myValue = theValue;
// };

exports = {
	getValue: function() {
		return myValue;
	},
	setValue: function(theValue) {
		myValue = theValue;
	}
};
