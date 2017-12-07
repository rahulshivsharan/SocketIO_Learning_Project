var application = require("./app.js");
var app = application.getApp();

// socket.IO
var http = require("http").Server(app);
var socketIO = require("socket.io")



var serverFn = serverFn;



var server = app.listen(application.getPort(),serverFn);
var io = socketIO(server);
io.on("connection",socketListener);



function serverFn(){
	var host = server.address().address;
  	var port = server.address().port;

  	console.log("Example app listening at http://%s:%s", host, port);
} // end of serverFn

function socketListener(socket){
	console.log("a user is connected to socket ",socket.id);
	
	socket.on("disconnect",function(){
		console.log("user disconnected ");
	});

	socket.on("Chat_Message",function(msg){
		console.log("message : "+msg);
		io.emit("Chat_Message",msg);
	});
} // end of socketListener

