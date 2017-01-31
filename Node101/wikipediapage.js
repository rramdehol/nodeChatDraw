// Include the http module as part of core so no NPM install needed
var http = require("http");
// Include the fs module. FS = file system. It is part of the core
var filesystem = require("fs");


// Wiki Front Page Render
function renderWikiHomePage(request, response){
	response.writeHead(200, {
		"content-type":"text/html"
	})
	var homePage = filesystem.readFileSync("wikipediapage.html");
	// console.log(homePage);
	response.end(homePage);
}
// Wiki Error Page
function renderErrorPage(request, response){
	response.writeHead(404, {
		"content-type":"text/html"
	})
	var errorPage = filesystem.readFileSync("errorpage.html");
	response.end(errorPage);
}
// Wiki Forbidden Page
function renderForbiddenPage(request, response){
	response.writeHead(403, {
		"content-type":"text/html"
	})
	var forbiddenPage = filesystem.readFileSync("forbiddenpage.html");
	response.end(forbiddenPage);
}

function apiWeatherPage (http, apikey, request, response){
	if(apiKey.length < 1 ){
		renderForbiddenPage(request, response)
	}
	
}


// Create a server
var server = http.createServer((request, response)=>{
	console.log("Server Connected")
	// Response Codes
	// 200
	if(request.url === "/"){
		renderWikiHomePage(request, response)
	}
	// 404
	else if(request.url === "/login"){
		renderForbiddenPage(request, response)
	}
	// 403
	else{
		renderErrorPage(request, response)
	}
	// Sanity Check
	response.end("Sanity Check");
});
server.listen(8000);