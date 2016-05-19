module.exports = function(grunt) {

	const fs = require('fs');
	const path = require('path');
	const webpack = require('webpack');

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					sourcemap: 'none'
				},
				files: {
					'./dist/www/css/site.css': './src/www/css/site.scss'
				}
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: './src',
						src: ['*.json','!www/**'],
						dest: './dist'
					},
					{
						expand: true,
						cwd: './src/www',
						src: ['*.html'],
						dest: './dist/www'
					}
				]
			}
		},
		babel: {
			options: {
				presets: ['es2015']
			},
			js: {
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.js','!www/**'],
					dest: 'dist',
					ext: '.js'
				}]
			}
		},
		webpack: {
			app: {
				entry: './src/www/js/index.js',
				output: {
					path: './dist/www/js',
					filename: 'index.js'
				},
				resolve: {
					alias: {
						backbone: path.join(__dirname, 'node_modules', 'backbone', 'backbone')
					}
				},
				module: {
					loaders: [{
						test: /\.json$/,
						loader: 'json'
					},{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
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
			},
			tests: {
				entry: './src/tests/specs.js',
				output: {
					path: './tests',
					filename: 'specs.js'
				},
				resolve: {
					alias: {
						backbone: path.join(__dirname, 'node_modules', 'backbone', 'backbone')
					}
				},
				module: {
					loaders: [{
						test: /\.json$/,
						loader: 'json'
					},{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
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
			}
		},
		watch: {
			sass: {
				files: ['src/www/css/**/*.scss'],
				tasks: ['sass']
			},
			copy: {
				files: ['src/*.json','src/www/*.html','src/www/tpls/*.html'],
				tasks: ['copy']
			},
			babel: {
				files: ['src/**/*.js','!src/www/**'],
				tasks: ['babel']
			},
			webpack: {
				files: ['src/www/**/*.js','src/www/tpls/**/*.hbs'],
				tasks: ['webpack']
			},
			webpackTests: {
				files: ['src/tests/**/*.js'],
				tasks: ['webpack:tests']
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('server', function() {
		require('./dist/server')
			.default(JSON.parse(fs.readFileSync('./config.json')))
			.start(() => console.log('web server started'))
			.catch(console.error);
		this.async();
	});

	grunt.registerTask('default', [
		'sass', 'copy', 'babel', 'webpack', 'watch'
	]);

};
