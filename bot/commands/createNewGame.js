/* Create New Game Based on Information Provided by User */
controller.hears(['dibs'], 'direct_message,direct_mention,mention', function(bot,message) {
	var msg = message.text,
		players = [],
		done = false,
		gameType;

	// Check what game type was presented - if none were mentioned or we can't figure it out, let them know and exit
	if(msg.indexOf('ping') >= 0 && msg.indexOf('pong') >= 0) {
		gameType = "pingPong";
	}else if(msg.indexOf('pool') >= 0) {
		gameType = "pool";
	}else{
		done = true;
		bot.reply(message, "I didn't catch what game you wanted to play, please try again saying either ping pong or pool!");
	}

	if(!done) {
		players = msg.match("<@(.*)>"); // Wrong, I don't think this is the right way
		console.log(players.length, players, msg);
	}
});