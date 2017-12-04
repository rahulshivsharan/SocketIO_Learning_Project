var http = require("http");
var url = require("url");
var SERVER_PORT = 3045;

http.createServer(onRequest).listen(SERVER_PORT,function(){
	console.log(" Server is listening on Port ",SERVER_PORT);
});

var route = {
	routes : {},
	for : function(method,path,handler){
		this.routes[method + path] = handler;
	}
}

route.for("GET","/hello",function(request,response){
	var responeHeader = {
		"Content-Type" : "text/html"
	}
	response.writeHead(200,responeHeader);
	response.write("<span style='font-size:5.5em;font-weight:bold;color:blue'>Hello</span>");	
	response.end();
});

route.for("POST","/hello",function(request,response){	
	var responeHeader = {
		"Content-Type" : "application/json"
	}
	response.writeHead(200,responeHeader);

	request.on("data",function(chunck){
		console.log(" Chunk ",chunck.toString());
	});

	request.on("end",function(){
		console.log(request.method+",  END");
	});
	
	var responseString = JSON.stringify({	
		"message" : "Hi, I am backend server "+request.method
	});

	response.write(responseString);
	response.end();
});

route.for("PUT","/hello",function(request,response){	
	var responeHeader = {
		"Content-Type" : "application/json"
	}
	response.writeHead(200,responeHeader);
	
	request.on("data",function(chunck){
		console.log(" Chunk ",chunck.toString());
	});

	request.on("end",function(){
		console.log(request.method+",  END");
	});

	var responseString = JSON.stringify({	
		"message" : "Hi, I am backend server "+request.method
	});

	response.write(responseString);
	response.end();
});

route.for("DELETE","/hello",function(request,response){	
	var responeHeader = {
		"Content-Type" : "application/json"
	}
	response.writeHead(200,responeHeader);
	
	request.on("data",function(chunck){
		console.log(" Chunk ",chunck.toString());
	});

	request.on("end",function(){
		console.log(request.method+",  END");
	});

	var responseString = JSON.stringify({	
		"message" : "Hi, I am backend server "+request.method
	});

	response.write(responseString);
	response.end();
});

function onRequest(request,response){
	var pathName =  url.parse(request.url).pathname;
	console.log("Request for "+(request.method + pathName)+" recieved");
	
	var responeHeader = undefined;

	if(typeof route.routes[request.method + pathName] === 'function'){
		route.routes[request.method + pathName](request,response);
	}else{
		responeHeader = {
			"Content-Type" : "text/html"
		}
		response.writeHead(404,responeHeader);
		response.write("<span style='font-size:5.5em;font-weight:bold;color:red'>Error, Not Found !!!!</span>");
		response.end();
	}
	
} // end of onRequest