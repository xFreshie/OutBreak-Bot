const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 500,
  messageCacheLifetime: 120,
  messageSweepInterval: 60
});
const Cleverbot = require("cleverbot-node");
const economy = require('discord-eco');
const fs = require('fs');
const yt = require('ytdl-core');
const sql = require("sqlite");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC74amM7cQZbj-XPp-OAY1pesPw"});
 
const PREFIX = "-";
	
var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc you"
];
	
var fortunes2 = [
    "Do you kno da wae brudda",
    "YOU SHALL NOT PASS",
    ":cat:",
    "Kappa",
    "Le me show u da wae"
];
var memelist = [
    'https://fthmb.tqn.com/-fP8YHAc27tYnXQCTXimB1VHI64=/1600x1487/filters:no_upscale():fill(FFCC00,1)/overlyattached-5900fa4a3df78c54563e3d8b.jpg',
    'https://media.discordapp.net/attachments/350685728688177154/404585410916777995/mem6.jpg?width=550&height=437',
    'http://quotesnhumor.com/wp-content/uploads/2014/11/Funniest-Memes-of-the-week-Funnies-Humor.jpg',
    'https://memegenerator.net/img/instances/81083705/wtf-boys-somebody-forget-their-manners-wheres-my-fuckin-spaghetti.jpg',
    'https://memegenerator.net/img/instances/500x/60313342/the-secret-to-my-spaghetti-is-the-milk-from-my-well-you-know-where-.jpg',
    'https://pics.me.me/r-spaghetti-u-meat-u2-ny-alls-who-wants-to-6607599.png',
    'https://www.happynewyear2018x.com/wp-content/uploads/2017/12/happy-new-year-meme-2018.jpg',
    'https://i.ytimg.com/vi/oPFQR5DTpAI/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hEDfTabBtoGso3XxRnn5M8eCy-wIuiEZZFKJh2xG1C6mwAvj',
    'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
    'https://media.giphy.com/media/l0CLTK3YV3ImVmJfa/giphy.gif'
]

var roast = [
	"You called me ugly?, Excuse me, I'm not a mirror.",
	"I'd give you a nasty look, but you've already got one.",
	"If laughter is the best medicine, your face must be curing the world.",
	"It looks like your face caught fire and someone tried to put it out with a hammer. ",
	"Your lips keep moving but all I hear is Blah, blah, blah.",
	"Your family tree must be a cactus because everyone on it is a prick.",
	"You'll never be the man your mother is.",
	"Did you know they used to be called Jumpolines until your mum jumped on one?",
	"Just because you have one doesn't mean you need to act like one. ",
	"If you really want to know about mistakes, you should ask your parents."
]

var dab = [
	'https://media.giphy.com/media/d4blihcFNkwE3fEI/giphy.gif'
]

var pizza = [
	'https://i.imgur.com/Kp3DeAr.png'
]

var wot = [
	'https://media.giphy.com/media/nipbykblMUnu0/giphy.gif'
]
 
var bot = new Discord.Client();
 
bot.on('ready', () => {
    console.log('-=-=-=-=-=-=-=-');
    console.log('Status = Successfully Started');
    console.log('Author = xFreshie & Eshan');
    console.log('-=-=-=-=-=-=-=-');
    bot.user.setActivity('With Freshan!');
    bot.user.setStatus("online")
  });
 
bot.on("message", function(message) {
    console.log(`(General) ${message.author.id}: ${message.content}`);
    if (message.author.equals(bot.user)) return;
    // -----------------------------------------
    //-----------------CHAT MODA FKIN BOT----------------- Better not Touch this  Better not Touch this
    var botidf = '<@411810957258522624>';
    // var botidfl = botidf.toLowerCase();
    if (message.content.startsWith(botidf)) {
        clbot.write(message.content.split(20), (response) => {
          message.channel.startTyping();
          setTimeout(() => {
            message.channel.send(response.output).catch(console.error);
            message.channel.stopTyping();
          }, Math.random() * (1 - 3) + 1 * 1000);
        });
    }
    //-----------------CHAT MODA FKIN BOT-----------------  Better not Touch this  Better not Touch this
    // --------------------------------------------
   
    if (!message.content.startsWith(PREFIX)) return;
   
    var args = message.content.substring(PREFIX.length).split(" ");
    console.log(`(ChromeCommand) ${message.author.id}: ${message.content}`);
    switch (args[0].toLowerCase()) {
        case"ping":
            var botpppt = bot.ping.toString();
            var botzping = botpppt.substring(0, 5);
            var embed = new Discord.RichEmbed()
            .addField('Pong!', 'Bot`s Latency is '+botzping+"ms." )
            .setColor(("#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); })))
            message.channel.send(embed);
            break;
		case "serverinfo":
			let sicon = message.guild.displayAvatarURL;
			let serverembed = new Discord.RichEmbed()
			.setDescription("**Server information**")
			.setColor("#072ebc")
			.setThumbnail(sicon)
			.addField("Server Name", message.guild.name)
			.addField("Created On", message.guild.createdAt)
			.addField("You joined", message.member.joinedAt)
			.addField("Total Members", message.guild.memberCount);
			message.channel.send(serverembed);
			break;
        case "info":
			let bicon = bot.user.displayAvatarURL;
			let botembed = new Discord.RichEmbed()
			.setDescription("**Bot Information**")
			.setColor("#072ebc")
			.setThumbnail(bicon)
			.addField("Bot Name", bot.user.username)
			.addField("Bot info", "I'm an A.I Bot created by **xFreshie and Eshan**. Please use **-help** to check my commands. Have fun :wink:")
			.addField("Created on", bot.user.createdAt);
            message.channel.send(botembed);
            break;
        case "8ball":
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("Please mention a question to answer.");
            break;
        case "userinfo":
            var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info!")
            .setColor("#9B59B6")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt);
        message.channel.send(embed);
        break;
    case "noticeme":
        message.channel.send(message.author.toString() + " Hi senpaii~~ ");
        break;
    case "help":
		message.channel.send('**=== Help ===**\n**-help** = Shows you this page.\n**-serverinfo** = Shows you the info about the discord server\n**-noticeme** = Notices you.\n**-userinfo--** = Shows the info about you.\n**-8ball** = Selects a random answer about your question.\n**-ping** = Pings, what else.\n**-meme** = Our love, our life, our dank memes.\n**-dab** = DABS ON EM HATERZ.\n**-roast** = Roasts people\n**-say** = Says the message that the user told the bot to say\n**-whosyourdada** = you know\n **-pizza** = You know this too lol\n**Type** @Outbreak (Question or anything), He answers it or talks to you.\nType **-economy** for banking commands \n```Please use - as the prefix```\n**Special thanks to Eshan for helping me out!**');
        break;
    case "meme":
	message.delete().catch(O_o=>{});
    message.channel.send("***Danke ME ME***", {
        file: (memelist[Math.floor(Math.random() * memelist.length)])
    });
            break;
	case "dab":
    message.channel.send("**<o/**", {
        file: (dab[Math.floor(Math.random() * dab.length)])
    });
		break;
	case "money":
        economy.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
            message.channel.send(`**Balance:** ${i.money}`);
    });
		break;
	case "addmoney":
		var memberzz= message.mentions.members.first()
		if (!message.mentions.members.first()||message.guild.members.get(args[0])||!args[2]) return message.reply("Usage -addmoney @name [Amount]");
			 if(message.member.hasPermission("MANAGE_MESSAGES")){
				economy.updateBalance(memberzz.user.id , args[2]).then((i) => { 
				message.channel.send(`**You Sent ${memberzz.user.username} `+args[2]+`**\n**New Balance:** ${i.money}`);
				})
				 
			}
			else {
				message.reply(', You dont have the Permission to use that Command..')
			}
			break;
	case "payfine":
        if(message.member.hasPermission("MANAGE_MESSAGES")){
          economy.updateBalance(message.author.id, -500).then((i) => { 
          message.channel.send(`**You paid the fine of $500!**\n**New Balance:** ${i.money}`);
          })
        }
        else {
          message.reply('```You dont have the Permission to use that command```')
        }
        break;
	case "economy":
		message.channel.send("***== Economy Commands ==**\n**-money** = **Shows you the balance in your bank account**\n**-addmoney** = **Adds money to the tagged user's account** ```MUST BE A STAFF TO USE```\n**-payfine** = **Pays a fine**\n**More commands coming soon!**");
		break;
	case "roast":
				message.channel.send(roast[Math.floor(Math.random() * roast.length)]);
	break;
	case "say":
		     if(message.member.hasPermission("MANAGE_MESSAGES")){
        	var sayMessage = message.content.substring(4)
        	message.delete().catch(O_o=>{});
        	message.channel.send(sayMessage);
			}
			else {
				message.reply('``You dont have the Permission to use that Command``')
			}
			break;
	case "kick":
		    message.channel.send("**In maintenance, please wait for freshie to add the command!**")
	case "whosyourdada":
		    message.channel.send("**MA DADDA IS FRESHIE AND MA MOMA IS ESHAN**")
		    break;
	case "pizza":
		    message.channel.send(":pizza:\n**Did you expect a pizza image? nah man**")
		    break;
	case "uwot":
    message.channel.send("**u wot m8 i besh yur hed**", {
        file: (wot[Math.floor(Math.random() * wot.length)])
    });
		    break;
	case "guilds":
		    message.channel.send(client.guilds.size)
		    break;
//Set Prefix commands | BETTER NOT TOUCH THIS
	    case "setprefix":
		    message.channel.send("``In maintenance``")
		    break;
//music commands
		    var aliases_file_path = "aliases.json";

var stopped = false;
var inform_np = true;

var now_playing_data = {};
var queue = [];
var aliases = {};

var voice_connection = null;
var voice_handler = null;
var text_channel = null;

var yt_api_key = null;

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

var commands = [

	{
		command: "stop",
		description: "Stops playlist (will also skip current song!)",
		parameters: [],
		execute: function(message, params) {
			if(stopped) {
				message.reply("Playback is already stopped!");
			} else {
				stopped = true;
				if(voice_handler !== null) {
					voice_handler.end();
				}
				message.reply("Stopping!");
			}
		}
	},
	
	{
		command: "resume",
		description: "Resumes playlist",
		parameters: [],
		execute: function(message, params) {
			if(stopped) {
				stopped = false;
				if(!is_queue_empty()) {
					play_next_song();
				}
			} else {
				message.reply("Playback is already running");
			}
		}
	},

    {
        command: "request",
        description: "Adds the requested video to the playlist queue",
        parameters: ["video URL, video ID, playlist URL or alias"],
        execute: function (message, params) {
            if(aliases.hasOwnProperty(params[1].toLowerCase())) {
                params[1] = aliases[params[1].toLowerCase()];
            }

            var regExp = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
            var match = params[1].match(regExp);

            if (match && match[2]){
                queue_playlist(match[2], message);
            } else {
                add_to_queue(params[1], message);
            }
        }
    },

	{
		command: "search",
		description: "Searches for a video on YouTube and adds it to the queue",
		parameters: ["query"],
		execute: function(message, params) {
			if(yt_api_key === null) {
				message.reply("You need a YouTube API key in order to use the !search command. Please see https://github.com/agubelu/discord-music-bot#obtaining-a-youtube-api-key");
			} else {
				var q = "";
				for(var i = 1; i < params.length; i++) {
					q += params[i] + " ";
				}
				search_video(message, q);
			}
		}
	},

	{
		command: "np",
		description: "Displays the current song",
		parameters: [],
		execute: function(message, params) {

			var response = "Now playing: ";
			if(is_bot_playing()) {
				response += "\"" + now_playing_data["title"] + "\" (requested by " + now_playing_data["user"] + ")";
			} else {
				response += "nothing!";
			}

			message.reply(response);
		}
	},

	{
		command: "setnp",
		description: "Sets whether the bot will announce the current song or not",
		parameters: ["on/off"],
		execute: function(message, params) {

			if(params[1].toLowerCase() == "on") {
				var response = "Will announce song names in chat";
				inform_np = true;
			} else if(params[1].toLowerCase() == "off") {
				var response = "Will no longer announce song names in chat";
				inform_np = false;
			} else {
				var response = "Sorry?";
			}
			
			message.reply(response);
		}
	},

	{
		command: "skip",
		description: "Skips the current song",
		parameters: [],
		execute: function(message, params) {
			if(voice_handler !== null) {
				message.reply("Skipping...");
				voice_handler.end();
			} else {
				message.reply("There is nothing being played.");
			}
		}
	},

	{
		command: "queue",
		description: "Displays the queue",
		parameters: [],
		execute: function(message, params) {
			var response = "";
	
			if(is_queue_empty()) {
				response = "the queue is empty.";
			} else {
				var long_queue = queue.length > 30;
				for(var i = 0; i < (long_queue ? 30 : queue.length); i++) {
					response += "\"" + queue[i]["title"] + "\" (requested by " + queue[i]["user"] + ")\n";
				}

				if(long_queue) response += "\n**...and " + (queue.length - 30) + " more.**";
			}
			
			message.reply(response);
		}
	},

	{
		command: "clearqueue",
		description: "Removes all songs from the queue",
		parameters: [],
		execute: function(message, params) {
			queue = [];
			message.reply("Queue has been clered!");
		}
	},

	{
		command: "remove",
		description: "Removes a song from the queue",
		parameters: ["Request index or 'last'"],
		execute: function(message, params) {
			var index = params[1];

			if(is_queue_empty()) {
				message.reply("The queue is empty");
				return;
			} else if(isNaN(index) && index !== "last") {
				message.reply("Argument '" + index + "' is not a valid index.");
				return;
			}

			if(index === "last") { index = queue.length; }
			index = parseInt(index);
			if(index < 1 || index > queue.length) {
				message.reply("Cannot remove request #" + index + " from the queue (there are only " + queue.length + " requests currently)");
				return;
			}

			var deleted = queue.splice(index - 1, 1);
			message.reply('Request "' + deleted[0].title +'" was removed from the queue.');
		}
	},
	
	{
		command: "aliases",
		description: "Displays the stored aliases",
		parameters: [],
		execute: function(message, params) {

			var response = "Current aliases:";
			
			for(var alias in aliases) {
				if(aliases.hasOwnProperty(alias)) {
					response += "\n" + alias + " -> " + aliases[alias];
				}
			}
			
			message.reply(response);
		}
	},
	
	{
		command: "setalias",
		description: "Sets an alias, overriding the previous one if it already exists",
		parameters: ["alias", "video URL or ID"],
		execute: function(message, params) {

			var alias = params[1].toLowerCase();
			var val = params[2];
			
			aliases[alias] = val;
			fs.writeFileSync(aliases_file_path, JSON.stringify(aliases));
			
			message.reply("Alias " + alias + " -> " + val + " set successfully.");
		}
	},
	
	{
		command: "deletealias",
		description: "Deletes an existing alias",
		parameters: ["alias"],
		execute: function(message, params) {

			var alias = params[1].toLowerCase();

			if(!aliases.hasOwnProperty(alias)) {
				message.reply("Alias " + alias + " does not exist");
			} else {
				delete aliases[alias];
				fs.writeFileSync(aliases_file_path, JSON.stringify(aliases));
				message.reply("Alias \"" + alias + "\" deleted successfully.");
			}
		}
	},

	{
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

bot.on("disconnect", event => {
	console.log("Disconnected: " + event.reason + " (" + event.code + ")");
});

bot.on("message", message => {
	if(message.channel.type === "dm" && message.author.id !== bot.user.id) { //Message received by DM
		//Check that the DM was not send by the bot to prevent infinite looping
		message.channel.sendMessage(dm_text);
	} else if(message.channel.type === "text" && message.channel.name === text_channel.name) { //Message received on desired text channel
		if(message.isMentioned(bot.user)) {
			message.reply(mention_text);
		} else {
			var message_text = message.content;
			if(message_text[0] == '!') { //Command issued
				handle_command(message, message_text.substring(1));
			}
		}
	}
});

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function add_to_queue(video, message, mute = false) {

	if(aliases.hasOwnProperty(video.toLowerCase())) {
		video = aliases[video.toLowerCase()];
	}

	var video_id = get_video_id(video);

	ytdl.getInfo("https://www.youtube.com/watch?v=" + video_id, (error, info) => {
		if(error) {
			message.reply("The requested video (" + video_id + ") does not exist or cannot be played.");
			console.log("Error (" + video_id + "): " + error);
		} else {
			queue.push({title: info["title"], id: video_id, user: message.author.username});
			if (!mute) {
				message.reply('"' + info["title"] + '" has been added to the queue.');
			}
			if(!stopped && !is_bot_playing() && queue.length === 1) {
				play_next_song();
			}
		}
	});
}

function play_next_song() {
	if(is_queue_empty()) {
		text_channel.sendMessage("The queue is empty!");
	}

	var video_id = queue[0]["id"];
	var title = queue[0]["title"];
	var user = queue[0]["user"];

	now_playing_data["title"] = title;
	now_playing_data["user"] = user;

	if(inform_np) {
		text_channel.sendMessage('Now playing: "' + title + '" (requested by ' + user + ')');
		bot.user.setGame(title);
	}

	var audio_stream = ytdl("https://www.youtube.com/watch?v=" + video_id);
	voice_handler = voice_connection.playStream(audio_stream);

	voice_handler.once("end", reason => {
		voice_handler = null;
		bot.user.setGame();
		if(!stopped && !is_queue_empty()) {
			play_next_song();
		}
	});

	queue.splice(0,1);
}

function search_command(command_name) {
	for(var i = 0; i < commands.length; i++) {
		if(commands[i].command == command_name.toLowerCase()) {
			return commands[i];
		}
	}

	return false;
}

function handle_command(message, text) {
	var params = text.split(" ");
	var command = search_command(params[0]);

	if(command) {
		if(params.length - 1 < command.parameters.length) {
			message.reply("Insufficient parameters!");
		} else {
			command.execute(message, params);
		}
	}
}

function is_queue_empty() {
	return queue.length === 0;
}

function is_bot_playing() {
	return voice_handler !== null;
}

function search_video(message, query) {
	request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, (error, response, body) => {
		var json = JSON.parse(body);
		if("error" in json) {
			message.reply("An error has occurred: " + json.error.errors[0].message + " - " + json.error.errors[0].reason);
		} else if(json.items.length === 0) {
			message.reply("No videos found matching the search criteria.");
		} else {
			add_to_queue(json.items[0].id.videoId, message);
		}
	})
}

function queue_playlist(playlistId, message, pageToken = '') {
	request("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playlistId + "&key=" + yt_api_key + "&pageToken=" + pageToken, (error, response, body) => {
		var json = JSON.parse(body);
		if ("error" in json) {
			message.reply("An error has occurred: " + json.error.errors[0].message + " - " + json.error.errors[0].reason);
		} else if (json.items.length === 0) {
			message.reply("No videos found within playlist.");
		} else {
			for (var i = 0; i < json.items.length; i++) {
				add_to_queue(json.items[i].snippet.resourceId.videoId, message, true)
			}
			if (json.nextPageToken == null){
				return;
			}
			queue_playlist(playlistId, message, json.nextPageToken)
		}
	});
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function get_video_id(string) {
	var regex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/;
	var matches = string.match(regex);

	if(matches) {
		return matches[1];
	} else {
		return string;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

exports.run = function(server_name, text_channel_name, voice_channel_name, aliases_path, token) {

	aliases_file_path = aliases_path;

	bot.on("ready", () => {
		var server = bot.guilds.find("name", server_name);
		if(server === null) throw "Couldn't find server '" + server_name + "'";

		var voice_channel = server.channels.find(chn => chn.name === voice_channel_name && chn.type === "voice"); //The voice channel the bot will connect to
		if(voice_channel === null) throw "Couldn't find voice channel '" + voice_channel_name + "' in server '" + server_name + "'";
		
		text_channel = server.channels.find(chn => chn.name === text_channel_name && chn.type === "text"); //The text channel the bot will use to announce stuff
		if(text_channel === null) throw "Couldn't find text channel '#" + text_channel_name + "' in server '" + server_name + "'";

		voice_channel.join().then(connection => {voice_connection = connection;}).catch(console.error);

		fs.access(aliases_file_path, fs.F_OK, (err) => {
			if(err) {
				aliases = {};
			} else {
				try {
					aliases = JSON.parse(fs.readFileSync(aliases_file_path));
				} catch(err) {
					aliases = {};
				}
			}
		});
    }	
});		 	    
bot.login(process.env.BOT_TOKEN);
