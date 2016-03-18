/* Returns list of commands Garbot (GM) knows with a short description */
module.exports = controller.hears(['commands','list commands','keywords'], 'direct_message,direct_mention,mention', function(bot,message) {
  var reply = "";
  for(var i = 0; i < COMMANDS_LIST.length; i++) {
    var command = COMMANDS_LIST[i];
    reply += "`" + command.name + "` - _" + command.desc + "_\n";
  }
  bot.reply(message, reply);
});