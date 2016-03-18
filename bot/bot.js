var slackToken = require('./config/token.js');

var Botkit = require('./lib/Botkit.js');
var os = require('os');

/* Global Variables */
parse = require('./config/parse.js');
controller = Botkit.slackbot({debug: true});
bot = controller.spawn({token: slackToken}).startRTM();

/* Commands Constant Hold Command Names and Description */
COMMANDS_LIST = require('./commands/commandList.js');

/* Returns list of commands Garbot (GM) knows with a short description */
require('./commands/returnCommands.js');
/* Quick command to give out link for garage live stream */
require('./commands/returnLiveStream.js');
/* Return a link to view our rules for pool */
require('./commands/returnPoolRules.js');
/* Returns list of all the players saved in the database. If a player has an alias set that will be the main name returned with the slack name in () */
require('./commands/returnListOfPlayers.js');