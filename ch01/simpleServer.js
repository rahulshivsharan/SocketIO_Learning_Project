var http = require("http");
var SERVER_PORT = 3000;
http.createServer(serverFunc).listen(SERVER_PORT);

function serverFunc(request,response){
	console.log("Server is running on ",SERVER_PORT);
	response.writeHead(200,{
		"Content-Type" : "text/html"
	});	
	response.write("<h3>Hi This is from Server</h3>");
	response.end();
}// serverFunc