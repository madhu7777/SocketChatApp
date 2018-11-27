client = require('socket.io').listen(3000).sockets;


client.on('connection', function(socket) {
	console.log("Someone has connected!");


	socket.on("typing",function(data) { 
		client.emit('typOut', data);
		console.log(data)
	})
	socket.on("send",function(data) { 
		client.emit('output', data);
	})
})
