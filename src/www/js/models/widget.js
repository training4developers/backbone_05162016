import Backbone from 'backbone';

export default Backbone.Model.extend({

	urlRoot: '/api/widgets',

	defaults: {
		quantity: 0
	}

});
