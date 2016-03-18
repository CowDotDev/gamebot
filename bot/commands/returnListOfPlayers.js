/* Returns list of all the players saved in the database. If a player has an alias set that will be the main name returned with the slack name in () */
module.exports = controller.hears(['list players'], 'direct_message,direct_mention,mention', function(bot,message) {
  var reply = "Here are a list of saved players:";
  parse.find('Players', {order: '-name'}, function(error, response) {
    var players = response.results;
    reply = (players.length <= 0 ? reply + " No Saved Players" : reply);
    for(var i = 0; i < players.length; i++) {
      var player = players[i];
      reply = reply + " `" + (player.alias && player.alias != "" ? player.alias + " (" + player.name + ")" : player.name) +"`,";
    }
    reply = reply.substring(0,reply.length-1); // Remove trailing comma

    bot.reply(message, reply);
  });
});