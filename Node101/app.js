// Include the http module as part of core so no NPM install needed
var http = require("http");
// Include the fs module. FS = file system. It is part of the core
var filesystem = require("fs");




function renderHomePage(request, response) {
	response.writeHead(200,{
			"content-type":"text/html"
	})
	var theHomePageHTML = filesystem.readFileSync("homePage.html");
	response.end(theHomePageHTML);
	// someone came to our home page give then the home content
	// the manual way without an fs
	// response.write("<h1>This is the homepage</h1>")
	// response.write("<p>I'm very proud of my node ability</p>")
	// response.write("<p>I made a page in Node so there</p>")
}
// Setup an http server and store it in a server var
// the callback will run anytime someone hits the port server is listening
var server = http.createServer((request, response)=>{
	console.log("Someone connected to our server")
	console.log(request.url)

	if(request.url === "/"){
		renderHomePage(request, response)
	}
	else if(request.url === "./digitalcrafts-site-logo.jpg"){
		var img = filesystem.readFileSync("digitalcrafts-site-logo.jpg");
		response.writeHead(200, {
			"content-type":"image/png"
		})
		response.end(img)
	}
	else{
		response.writeHead(404,{
			"content-type":"text/html"
		})
		response.end("Sorry this page DNE Does Not Exist")
	}
	// the response will close the connection server 
	response.end("Sanity Check");

});
// Tell the sever we created to listen at port 8000
// Whenver anyone makes an HTTP reqeust at port 8000 the callback will fire
server.listen(8000);
console.log("Server is listening for HTTP traffic at port 8000")