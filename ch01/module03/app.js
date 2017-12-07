var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');
module.exports = new Application();

function Application(){
	// private variables
	var SERVER_PORT = 3035;

	this.getPort = getPort;
	this.getHeaders = getHeaders;
	this.getEndPoint = getEndPoint;
	this.getApp = getApp;
	this.getRouter = getRouter;

	app.use("/pages",express.static('pages'));

	
	var libs = path.join('E:\\RahulShivsharan\\MyPractise\\SocketIO_RealTimeWeb_Project','node_modules');
	app.use("/lib",express.static(libs));

	app.use("/routes",router);

	/*
	app.get("/",function(req,res){		
		res.sendFile(__dirname + '/pages/chatWindow01.html');
	});*/

	function getRouter(){
		return router;
	}

	function getPort(){
		return SERVER_PORT;
	}

	function getHeaders(){
		return headerObject;
	}

	function getEndPoint(){
		return END_POINT;
	}

	function getApp(){
		return app;
	}
} // end of Application