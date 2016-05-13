module.exports = function(grunt) {

	const fs = require('fs');
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
						src: ['*.json'],
						dest: './dist'
					},
					{
						expand: true,
						cwd: './src/www',
						src: ['*.html'],
						dest: './dist/www'
					},
					{
						expand: true,
						cwd: './src/www/tpls',
						src: ['*.html'],
						dest: './dist/www/tpls'
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
				module: {
					loaders: [{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
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
				files: ['src/www/**/*.js'],
				tasks: ['webpack']
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
			.start(() => console.log('web server started'));
		this.async();
	});

	grunt.registerTask('default', [
		'sass', 'copy', 'babel', 'webpack', 'watch'
	]);

};
