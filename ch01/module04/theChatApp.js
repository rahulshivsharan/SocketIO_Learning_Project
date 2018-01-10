
var application = require("./app.js");
var app = application.getApp();
var http = require("http").Server(app);
var socketIO = require("socket.io")
var io = undefined;

module.exports = new TheChatApp;


function TheChatApp(){	
	
	this.createIO = function(server){
		if(io === undefined || io === null){
			io = socketIO(server);	
		}	
	} // createIO

	this.getIO = function(){
		return io;
	}

	this.createSocketListener = function(listenerId){
		console.log("creating socket for ",listenerId," for socket ",io);
		io.on("connection",function(socketObject){
			console.log(" Socket Created ");
			socketObject.on(listenerId,function(msg){
				console.log(" Socket listening ",listenerId);
				io.emit(listenerId,msg);
			});
		}); // socketListener

	} // end of createSocketListener	

} // TheChatApp