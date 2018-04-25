// app.js
var express = require("express");
var utility = require('utility');


var app = express();

app.get('/',function(req,res){

	if(req.query.q){
		var q = req.query.q;


	var md5Value = utility.md5(q);


	res.send(md5Value);
	}else{
		res.send("没有值传递");
	}

	
});

app.listen(3000,function(req,res){
	console.log('app is running at port 3000');
})

