const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.send('Hello Youtube');
});

app.get('/webhook/', function(req,res){
	if(req.query['hub.verify_token'] === 'my_voice'){
		res.send(req.query['hub.challange'])
	}
	res.send('No Entry');
});

app.listen(app.get('port'), function(){
	console.log('running on porn :', app.get('port'));
})
