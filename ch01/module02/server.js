var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var q = require("Q");


module.exports = new Server();


function Server(){

	// private variables
	var routes = {};
	var SERVER_PORT = 3045;
	var root = __dirname + "/pages";

	// private Methods
	var onRequest = onRequest;
	var serveStatic = serveStatic; 

	// public methods
	this.start = start;
	this.forRoute = forRoute;

	/*
		Serve static files i.e. html
	*/
	function serveStatic(file){
		var deferred = q.defer();
		var fileToServe = path.join(root,file);		
		var stream = fs.createReadStream(fileToServe);

		stream.on("data",function(chunk){			
			deferred.resolve(chunk);
		});

		stream.on("error",function(error){			
			deferred.reject(error.message);			
		});		

		return deferred.promise;
	} // end of serveStatic

	function forRoute(method,path,handler){
		routes[method + path] = handler;
	} // end of forRoute

	function start(){
		http.createServer(onRequest).listen(SERVER_PORT,function(){
			console.log(" Server is listening on Port ",SERVER_PORT);
		});
	} // end of start

	function onRequest(request,response){

		var pathName =  url.parse(request.url).pathname;
		console.log("Request for "+(request.method + pathName)+" recieved");
		
		var responeHeader = undefined;
		
		serveStatic(pathName).then(function(file){
			responeHeader = {
				"Content-Type" : "text/html"
			}
			response.writeHead(200,responeHeader);
			response.write(file);
			response.end();
		},function(error){
			if(typeof routes[request.method + pathName] === 'function'){
				routes[request.method + pathName](request,response);
			}else{
				responeHeader = {
					"Content-Type" : "text/html"
				}
				response.writeHead(404,responeHeader);
				response.write("<span style='font-size:5.5em;font-weight:bold;color:red'>Error, Not Found !!!!</span>");
				response.end();
			} // end of else	
		});	
		
		
		

	} // end of onRequest
	
} // end of Server Function