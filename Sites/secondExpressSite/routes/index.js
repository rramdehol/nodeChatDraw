var express = require('express');
var router = express.Router();
var request = require("request");


// NEW ROUTE
router.get('/',(req, res, next)=>{
	var studentsArray = ["Ryan","Daniel","Sarah","Andy"];
	res.render('index', {
		studentsArray: studentsArray
	});	
});

// REVERSE ROUTE
router.get('/reverse',(req, res, next)=>{
	var studentsArray = ["Ryan","Daniel","Sarah","Andy"];
	res.render('reverse', {
		studentsArrayReversed: studentsArray.reverse()
	});	
});

// WEATHER ROUTE
router.get('/weather',(req, res, next)=>{
	res.render('weatherApp',{});
});
// MOVIE ROUTE
router.get('/movie',(req, res, next)=>{
	res.render('movieApp',{});
});

// WEATHER API ROUTE
router.get("/weatherAPI",(req, res, next)=>{
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
  	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
  	request.get(weatherUrl, (error, response, weatherData)=>{
  		console.log(error);
  		// res.send("Done");
  		weatherData = JSON.parse(weatherData);
  		console.log(weatherData);
  		res.json(weatherData);
  		res.render("weatherAPI",{
  			weatherObject: weatherData
  		});
  	});
});

module.exports = router;

// THINGS I KNOW
router.get('/thingsLearned',(req, res, next)=>{
	var thingsLearnedArray = ["Javascript", "CSS", "HTML", "React JS"]
	res.render('thingsLearned',{
		thingsLearnedArray: thingsLearnedArray
	});
});









