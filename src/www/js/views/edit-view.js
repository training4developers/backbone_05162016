import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.View.extend({

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		this.$el.html('Edit View');
		$(this.options.container).append(this.$el);
	}

});
