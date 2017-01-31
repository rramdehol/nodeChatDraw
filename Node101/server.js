var http = require("http");
console.log(http);
var server = http.createServer((request, response)=>{
	// console.log(request.rawHeaders[1]);
	response.writeHead(418,{
		"content-type":"text/plain"
	})
	response.end("<h1>Hello friend, This is your NODE JS server!</h1>");
})

// Listening on port 8000
server.listen(8000);
var port = 8000;
console.log("Server listening on port"+port+"for connections ...")
