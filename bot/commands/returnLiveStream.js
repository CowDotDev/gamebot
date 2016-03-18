/* Quick command to give out link for garage live stream */
module.exports = controller.hears(['live stream','stream'], 'direct_message,direct_mention,mention', function(bot,message) {
  bot.reply(message, 'Watch all the uncensored action at: http://gamebot.homeadvisor.com/stream');
});