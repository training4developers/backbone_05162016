import { Server } from 'hapi';
import inert from 'inert';

export default config => {

	const server = new Server();

	const serverConfig = new Promise((resolve, reject) => {

		server.register(inert, err => {

			if (err) return reject(err);

			server.connection({ port: config.webServer.port });

			server.route({
				method: 'GET',
				path: '/{param*}',
				handler: {
					directory: {
						path: config.webServer.folder
					}
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
