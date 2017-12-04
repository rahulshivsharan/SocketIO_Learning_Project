var http = require("http");
var url = require("url");
var SERVER_PORT = 3045;

http.createServer(onRequest).listen(SERVER_PORT,function(){
	console.log(" Server is listening on Port ",SERVER_PORT);
});

var route = {
	routes : {},
	for : function(path,handler){
		this.routes[path] = handler;
	}
}

var responeHeader = {
	"Content-Type" : "text/html"
}

route.for("/hello",function(request,response){
	response.writeHead(200,responeHeader);
	response.write("<span style='font-size:5.5em;font-weight:bold;color:blue'>Hello</span>");	
});

route.for("/wellcome",function(request,response){	
	response.writeHead(200,responeHeader);
	response.write("<span style='font-size:5.5em;font-weight:bold;color:green'>Wellcome</span>");
});

function onRequest(request,response){
	var pathName = url.parse(request.url).pathname;
	console.log("Request for "+pathName+" recieved");
	
	if(typeof route.routes[pathName] === 'function'){
		route.routes[pathName](request,response);
	}else{
		response.writeHead(404,responeHeader);
		response.write("<span style='font-size:5.5em;font-weight:bold;color:red'>Error, Not Found !!!!</span>");
	}
	response.end();
} // end of onRequest