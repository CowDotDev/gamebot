/* Return a link to view our rules for pool */
module.exports = controller.hears(['pool rules'], 'direct_message,direct_mention,mention', function(bot,message) {
	bot.reply(message, 'View the rules for the pool table here: http://gamebot.homeadvisor.com/poolrules');
});