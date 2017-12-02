var http = require("http");
var url = require("url");
var SERVER_PORT = 3045;

http.createServer(onRequest).listen(SERVER_PORT,function(){
	console.log(" Server is listening on Port ",SERVER_PORT);
});

function onRequest(request,response){
	var pathName = url.parse(request.url).pathname;
	console.log("Request for "+pathName+" recieved");
	var responeHeader = {
		"Content-Type" : "text/html"
	}
	if(pathName === "/hello"){
		response.writeHead(200,responeHeader);
		response.write("<span style='font-size:5.5em;font-weight:bold;color:blue'>Hello</span>");	
	}else if(pathName === "/wellcome"){
		response.writeHead(200,responeHeader);
		response.write("<span style='font-size:5.5em;font-weight:bold;color:green'>Wellcome</span>");
	}else{
		response.writeHead(404,responeHeader);
		response.write("<span style='font-size:5.5em;font-weight:bold;color:red'>Error, Not Found !!!!</span>");
	}

	response.end();
} // end of onRequest