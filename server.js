var net = require('net');

var server = net.createServer(function(connectionListener) {
	console.log("connected")
	
	console.log(this.maxConnections);
	
	// set maxConnections
	this.maxConnections = 4;
	
	console.log(this.maxConnections);
	
	console.log(this.address());
	
	this.getConnections(function(err, count){
		if (err) {
			console.log("Error getting connections");
		} else {
			console.log('Connection count: '+ count);
		}
	});
	
	connectionListener.on('end', function(){
		console.log('disconnected');
	});
	connectionListener.write('heyyo\r\n');
});

server.on('error', function(err){
	console.log('Server error: ' + err);
});
server.on('data', function(data){
	console.log(data.toString());
});

// listen

server.listen(8181, '127.0.0.1', 12, function(){
	console.log('server is listening');
});

