var server = require("./server");


server.forRoute("GET","/hello",function(request,response){
	var responeHeader = {
		"Content-Type" : "text/html"
	}
	response.writeHead(200,responeHeader);
	response.write("<span style='font-size:5.5em;font-weight:bold;color:blue'>Hello</span>");	
	response.end();
}); // end of /hello request

server.forRoute("POST","/hello",function(request,response){	
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
}); // end of /hello request

server.forRoute("PUT","/hello",function(request,response){	
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
}); // end of /hello request

server.forRoute("DELETE","/hello",function(request,response){	
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
}); // end of /hello request

server.start();