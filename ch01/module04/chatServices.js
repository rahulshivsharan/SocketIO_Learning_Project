var chatService = chatService;
module.exports = new chatService();
var chatApplication = require("./theChatApp.js");

function chatService(){
	var app = require("./app.js");
	var router = app.getRouter();


	router.route("/createChat").post(function(req,res){
		res.set("Content-Type","application/json");
		
		var date = new Date();

		chatApplication.createSocketListener(date.getTime());

		res.send({
			"chatId" : date.getTime()
		});

		res.end();
	}); 
} // end of chatService