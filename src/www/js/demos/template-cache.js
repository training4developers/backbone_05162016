import Marionette from 'backbone.marionette';

Marionette.TemplateCache.prototype.loadTemplate = templateId =>
	require(`../tpls/${templateId}.hbs`);

Marionette.TemplateCache.prototype.compileTemplate = rawTemplate =>
	rawTemplate;
