var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("../config/config.js")
/* GET home page. */

// req.body 
// req.params
// req.query

router.get('/', function(req, res, next) {
	request.get(config.baseUrl + config.nowPlayingEP + config.api_key, (err, response, movieData)=>{
		movieData = JSON.parse(movieData)
		// console.log(typeof(movieData));
		// res.json(movieData);
		res.render('index', { 
			movieData: movieData,
			imageUrl: config.imageBase,
		});
	})
  
});
// GET SearchMovie Request
router.get('/searchMovie', (req, res, next)=>{
	res.send('Haha this a get request')
})
// POST SearchMovie Request
router.post('/searchMovie', (req, res, next)=>{
	var movieSearchString = encodeURI(req.body.movieSearch);
	var queryUrl = config.baseUrl + 'search/movie?'+config.api_key+'&query='+movieSearchString;
	// res.send(queryUrl);
	request.get(queryUrl, (error, response, searchData)=>{
		searchData = JSON.parse(searchData);
		res.render('index',{
			movieData: searchData,
			imageUrl: config.imageBase
		})
	})
	// res.json(req.body);
});
// Search
router.get('/search', (req, res, next)=>{
	res.render('search', {});
});

module.exports = router;

