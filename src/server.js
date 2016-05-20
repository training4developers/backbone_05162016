import { Server } from 'hapi';
import inert from 'inert';
import apiRoutes from './api-routes';
import path from 'path';
import socketServer from 'socket.io';

export default config => {

	const server = new Server();

	server.connection({ port: config.webServer.port });

	const io = socketServer(server.listener);

	io.on('connection', function (socket) {

		console.log('connection made');

		socket.on('echo', function (msg) {
			console.log(msg);
			socket.emit('echo', msg);
		});

		var lastWidgetId = 0;
		setInterval(function() {
			socket.emit('event', JSON.stringify({
				id: ++lastWidgetId,
				name: 'A widget',
				color: 'red',
				size: 'large',
				quantity: 2
			}));
		}, 250);

	});

	const serverConfig = new Promise((resolve, reject) => {

		server.register(inert, err => {

			if (err) return reject(err);

			server.route(apiRoutes(config));

			server.route({
				method: 'GET',
				path: '/js/{param*}',
				handler: {
					directory: {
						path: config.webServer.folder + '/js'
					}
				}
			});

			server.route({
				method: 'GET',
				path: '/css/{param*}',
				handler: {
					directory: {
						path: config.webServer.folder + '/css'
					}
				}
			});

			server.route({
				method: 'GET',
				path: '/{param*}',
				handler: function(request, reply) {
					reply.file(path.join(config.webServer.folder, 'index.html'));
				}
			});

			resolve(server);

		});

	});

	return {
		start: cb => serverConfig.then(server => server.start(cb)),
		stop: cb =>  serverConfig.then(server => server.stop(cb))
	};

};
