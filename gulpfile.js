const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const serverAppFiles = ['src/**/*.js','!src/www/**'];
const serverDataFiles = ['src/**/*.json','!src/www/**'];
const webAppFiles = ['src/www/**/*.js','src/www/tpls/**/*.hbs','src/tests/**/*.js'];
const webAppHtmlFiles = ['src/www/**/*.html'];
const webAppSassFiles = ['src/www/css/**/*.scss'];

const webpackConfigs = [
	{
		entryPoint: './src/www/js/index.js',
		outputFolder: 'dist/www/js'
	},
	{
		entryPoint: './src/tests/specs.js',
		outputFolder: '__tests__'
	}
];

gulp.task('process-server-app', () =>
	gulp.src(serverAppFiles)
		.pipe(babel({ presets: ['es2015'] }))
		.on('error', console.dir)
		.pipe(gulp.dest('dist')));

gulp.task('process-server-data', () =>
	gulp.src(serverDataFiles)
		.pipe(gulp.dest('dist')));

gulp.task('process-web-app-html', () =>
	gulp.src(webAppHtmlFiles)
		.pipe(gulp.dest('dist/www')));

gulp.task('process-web-app-css', () =>
	gulp.src(webAppSassFiles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/www/css')));

gulp.task('process-web-app-js', () =>
	Promise.all(webpackConfigs.map(webpackConfig =>
		new Promise((resolve, reject) =>
			gulp.src(webpackConfig.entryPoint)
				.pipe(webpackStream({
					output: {
						filename: path.basename(webpackConfig.entryPoint)
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
						},{
							test: /\.hbs$/,
							loader: 'handlebars-loader'
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
				.pipe(gulp.dest(webpackConfig.outputFolder))
				.on('end', resolve)))).catch(console.error));

gulp.task('server', () =>
	require('./dist/server')
		.default(JSON.parse(fs.readFileSync('./config.json')))
		.start(() => console.log('web server started...'))
		.catch(console.error));

gulp.task('default', [
	'process-server-app',
	'process-server-data',
	'process-web-app-html',
	'process-web-app-css',
	'process-web-app-js'
], function () {
	gulp.watch(webAppFiles, ['process-web-app-js']);
	gulp.watch(webAppSassFiles, ['process-web-app-css']);
	gulp.watch(webAppHtmlFiles, ['process-web-app-html']);
	gulp.watch(serverAppFiles, ['process-server-app']);
	gulp.watch(serverDataFiles, ['process-server-data']);
});
