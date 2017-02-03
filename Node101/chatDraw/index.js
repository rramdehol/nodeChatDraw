// console.log("Sanity Check");

// Include hhtp and fs
var http = require("http");
var fileSystem = require("fs");

var server = http.createServer((request, response)=>{
	// console.log("Someone Connected Via HTTP");
	// fileSystem.readFile("index.html", "utf-8", (error, fileData)=>{
	// 	if(error){
	// 		// respond with a 500 error
	// 		response.writeHead(500, {"content-type":"text/html"});
	// 		response.end(error);
	// 	}
	// 	else{
	// 		// the file was able to read
	// 		response.writeHead(200, {"content-type":"text/html"});
	// 		response.end(fileData);
	// 	}
	// })
})
var socketUsers = [];
// Include the server version of socketIO and assign it to a variable
var socketIo = require("socket.io")
// Sockets are going to listen to the server which is listening on the port
var io = socketIo.listen(server);

// Handle socket connections ...
io.sockets.on("connect", (socket)=>{
	console.log("Someone Connected By Socket");
	socketUsers.push({
		socketId: socket.id,
		name: "Ryan"
	})
	io.sockets.emit("users", socketUsers);
	
	socket.on("messageToServer", (messageObject)=>{
		console.log("Someone sent a message", messageObject.message)
		io.sockets.emit("messageToClient",{
			message: messageObject.message,
			date: new Date(),
			name: "Ryan"
		})
	})
	socket.on("drawingToServer", (drawingData)=>{
		if(drawingData.lastMousePosition !== null){
			io.sockets.emit("drawingToClients", drawingData);
		}
	})
});

server.listen(8080);
console.log("listening..")