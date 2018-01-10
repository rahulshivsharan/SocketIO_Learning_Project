var application = require("./app.js");
var app = application.getApp();

// socket.IO
var chatApplication = require("./theChatApp.js");
var service = require("./chatServices.js");

var server = app.listen(application.getPort(),serverFn);

chatApplication.createIO(server);


function serverFn(){
	var host = server.address().address;
  	var port = server.address().port;

  	console.log("Example app listening at http://%s:%s", host, port);
} // end of serverFn

