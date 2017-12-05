# twitterbot
DNE Digital twitter bot


Pre-Requisites:
1) Make sure that you have NodeJS install
2) Run 'node -v' in your terminal and make sure you have a recent version
3) Run 'npm -v' in your terminal and make sure you have a recent version

Running the bot:
1) Clone or download this repo
2) In the command line cd to the repo
3) Run the command 'npm install' to make sure you packages are downloaded
4) Create a config.js file that looks a little something like this but with your values instead of XXX
	var config = {
	    consumer_key:         'XXXX',
	    consumer_secret:      'XXXX',
	    access_token:         'XXXX-XXX',
	    access_token_secret:  'XXXX'
	}

	module.exports = config;
4) Inside the repo simply run 'node server.js'
5) Check www.twitter.com/dnedigital to confirm the tweet went through
  (You can also check your terminal for the log of the successful tweet - or fail lol)
  
