const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const handlebars = require('gulp-handlebars');
const defineModule = require('gulp-define-module');

const serverAppFiles = ['src/**/*.js','!src/www/**'];
const webAppFiles = ['src/www/**/*.js'];
const webAppTemplateFiles = ['src/www/tpls/*.hbs'];
const webAppHtmlFiles = ['src/www/**/*.html'];
const webAppSassFiles = ['src/www/css/**/*.scss'];

const entryPoints = [ './src/www/js/index.js' ];

gulp.task('process-server-app', () =>
	gulp.src(serverAppFiles)
		.pipe(babel({ presets: ['es2015'] }))
		.on('error', console.dir)
		.pipe(gulp.dest('dist')));

gulp.task('process-web-app-html', () =>
	gulp.src(webAppHtmlFiles)
		.pipe(gulp.dest('dist/www')));

gulp.task('process-web-app-css', () =>
	gulp.src(webAppSassFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/www/css')));

gulp.task('process-web-app-js', () =>
	Promise.all(entryPoints.map(entryPoint =>
		new Promise((resolve, reject) =>
			gulp.src(entryPoint)
				.pipe(webpackStream({
					output: {
						filename: path.basename(entryPoint)
					},
					module: {
						loaders: [{
							test: /\.json$/,
							loader: 'json'
						},{
							test: /\.js$/,
							loader: 'babel-loader',
							exclude: /node_modules/,
							query: {
								passPerPreset: true,
								presets: ['react', 'es2015']
							}
						}]
					},
					plugins: [
						new webpack.ProvidePlugin({
							'Promise': 'exports?global.Promise!es6-promise',
							'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
							'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
						})
					]
				}))
				.on('error', reject)
				.pipe(gulp.dest('dist/www/js'))
				.on('end', resolve)))).catch(err => console.dir(err)));

gulp.task('process-web-app-templates', function() {
	gulp.src(webAppTemplateFiles)
		.pipe(handlebars())
		.pipe(defineModule('node'))
		.pipe(gulp.dest('./dist/www/tpls'));
});

gulp.task('server', () =>
	require('./dist/server')
		.default(JSON.parse(fs.readFileSync('./config.json')))
		.start(() => console.log('web server started...')));

gulp.task('default', [
	'process-server-app',
	'process-web-app-html',
	'process-web-app-templates',
	'process-web-app-css',
	'process-web-app-js'
], function () {

	gulp.watch(webAppFiles, ['process-web-app-js']);
	gulp.watch(webAppTemplateFiles, ['process-web-app-templates']);
	gulp.watch(webAppSassFiles, ['process-web-app-css']);
	gulp.watch(webAppHtmlFiles, ['process-web-app-html']);
	gulp.watch(serverAppFiles, ['process-server-app']);

});
