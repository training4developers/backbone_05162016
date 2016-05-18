import Widgets from './collections/widgets';
import Widget from './models/widget';
import WidgetTableView from './views/widget-table';
import WidgetCompactRowView from './views/widget-compact-row';

var widgets = new Widgets([
	new Widget({ id: 1, name: 'clippy', description: 'clippy is huge', color: 'gray', size: 'huge', quantity: 2 }),
	new Widget({ id: 2, name: 'cloud', description: 'clippy is pink', color: 'pink', size: 'medium', quantity: 1300 }),
	new Widget({ id: 3, name: 'boat', description: 'clippy is small', color: 'black', size: 'small', quantity: 5 })
]);

var widgetTableView = new WidgetTableView({
	container: '#app',
	collection: widgets,
	headerRowView: WidgetCompactHeaderView,
	widgetRowView: WidgetCompactRowView
});

widgetTableView.render();
