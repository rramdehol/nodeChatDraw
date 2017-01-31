var http = require("http");
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

var weatherAsEnglish = ""
var request = http.get(weatherUrl, (theResponse)=>{
	console.log(theResponse.statusCode)
	theResponse.on("data",(chunkOfData)=>{
		// console.log(chunkOfData);
		weatherAsEnglish+=chunkOfData;
		// console.log(weatherAsEnglish);
	}); 
	theResponse.on("end",()=>{
		console.log(weatherAsEnglish);
	})
})


