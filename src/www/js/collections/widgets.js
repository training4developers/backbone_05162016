import Backbone from 'backbone';
import Widget from '../models/widget';

export default Backbone.Collection.extend({
	url: '/api/widgets',
	model: Widget
});
