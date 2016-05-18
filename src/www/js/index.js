import _ from 'underscore';
import Backbone from 'backbone';
import Widgets from './collections/widgets';
import Widget from './models/widget';
import TableView from './views/table';
import WidgetHeaderView from './views/widget-header';
import WidgetDetailView from './views/widget-detail';

var widgets = new Widgets([
	new Widget({ id: 1, name: 'clippy', description: 'clippy is huge', color: 'gray', size: 'huge', quantity: 2 }),
	new Widget({ id: 2, name: 'cloud', description: 'clippy is pink', color: 'pink', size: 'medium', quantity: 1300 }),
	new Widget({ id: 3, name: 'boat', description: 'clippy is small', color: 'black', size: 'small', quantity: 5 })
]);

function AppController() {

	var controller = this;

	this.start = function() {

		controller.currentView = new TableView({
			container: '#app',
			collection: widgets,
			headerView: WidgetHeaderView,
			detailView: WidgetDetailView
		});

		controller.currentView.render();

		controller.listenTo(controller.currentView, 'edit-row', function(model) {
			console.log('edit row clicked!', JSON.stringify(model.toJSON()));
		});
	};

}

_.extend(AppController.prototype, Backbone.Events);

var appController = new AppController();
appController.start();

console.dir(appController);
