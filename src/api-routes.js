const widgets = [
	{ id: 1, name: 'Sprocket', color: 'red', size: 'large', quantity: 2 },
	{ id: 2, name: 'Thingy', color: 'blue', size: 'medium', quantity: 6 },
	{ id: 3, name: 'Doohickey', color: 'green', size: 'small', quantity: 10 }
];

let lastWidgetId = 3;

export default config => [

	{
		method: 'GET',
		path: '/api/widgets',
		handler: function(request, reply) {
			reply(widgets)
				.type('application/json')
				.code(200);
		}
	},

	{
		method: 'GET',
		path: '/api/widgets/{widgetId}',
		handler: function(request, reply) {
			reply(widgets.find(w => w.id === parseInt(request.params.widgetId)))
				.type('application/json')
				.code(200);
		}
	},

	{
		method: 'POST',
		path: '/api/widgets',
		handler: function(request, reply) {

			widgets.push(Object.assign(request.payload, { id: ++lastWidgetId }));

			reply({ id: lastWidgetId })
					.type('application/json')
					.code(200);

		}
	}

];
