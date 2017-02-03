var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// POST SEARCH NAME
router.post("/searchName",(req, res, next)=>{
	var classArray = ["Sean","Drew","Daniel","Kyle","Rishi","Liz","Anna","Ryan","Connie","Sarah","Andy","Micahel","Paul","Mason"];
	var currentSearchedName = req.body.nameSearch;
	console.log(currentSearchedName);
	var confirmation = "";
	if(classArray.indexOf(currentSearchedName)>0){
		confirmation = "Yes"
	}
	else {
		confirmation = "No"
	}
	res.render('index',{
		
	});
})