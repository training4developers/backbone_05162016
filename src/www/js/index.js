import io from 'socket.io-client';

const socket = io();

socket.on('echo', function(msg) {
	console.log(msg);
});

socket.emit('echo', 'Hi!');
