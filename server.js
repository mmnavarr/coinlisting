/*****************************
 **							**
 **		Exchange Scraper	**
 **		Malcolm Navarro		**
 **							**
 *****************************/

var express = require('express');
var app = express();

var request = require('request');
var schedule = require('node-schedule');
var fs = require('fs');
var path = require('path');
var Twit = require('twit');
var config = require(path.join(__dirname, 'config.js'));
var t = new Twit(config);


// TODO
// Host bot on a server (Google Apps? Heroku?)

var isAlive = app.get('/', function(req, res){
  res.send("Yes, I'm up and alive, thank you for asking..");
});


// Stream twitter user tweets to filter for new listings
var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);

	var stream = t.stream('statuses/filter', { follow: ['binance_2017', 'bittrexexchange', 'hitbtc', 'bitfinex', 'bitstamp', 'krakenfx', 'bithumbofficial', 'bithumbexchange'] });
 
	stream.on('tweet', function (tweet) {
		console.log(tweet);
	});
});






