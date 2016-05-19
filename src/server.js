import { Server } from 'hapi';
import inert from 'inert';
import apiRoutes from './api-routes';
import path from 'path';

export default config => {

	const server = new Server();

	const serverConfig = new Promise((resolve, reject) => {

		server.register(inert, err => {

			if (err) return reject(err);
			server.connection({ port: config.webServer.port });

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
		stop: cb =>  serverConfig.then(server => server.start(cb))
	};

};
