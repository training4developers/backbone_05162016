/*global describe it expect beforeEach afterEach*/

import Widget from '../../www/js/models/widget';

describe('demo tests', function() {

	var widgetModel;

	beforeEach(function() {
		widgetModel = new Widget();
	});

	it('quantity default value is 0', function() {

		expect(widgetModel.get('quantity')).toBe(0);

	});

	describe('demo tests', function() {

		beforeEach(function() {
			console.log('setup test 2');
		});

		it('demo test 2', function() {

			console.log('demo test 2');
			expect(true).toBe(true);

		});

		afterEach(function() {
			console.log('tear down test 2');
		});

	});

	afterEach(function() {
		console.log('tear down test');
	});

});
