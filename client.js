var net = require('net');
// create connection
var connection = net.createConnection({port: 8181, host:'127.0.0.1'},
// connectListener callback
	function(){
		console.log('connection sucessful');
	}
)