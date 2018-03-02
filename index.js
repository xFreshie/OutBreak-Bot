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
const YTDL = require('ytdl-core');
const sql = require("sqlite");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC74amM7cQZbj-XPp-OAY1pesPw"});
 
const PREFIX = "-";

function play (connection, message) {
    var server = servers[message.guild.id];
    
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
    server.queue.shift();
    
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};

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
		    if(message.member.hasPermission("KICK_MEMBERS")){
			    var member = message.mentions.members.first();
			    member.kick().then((member) => {
				    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
			}
			else {
				message.reply('``You dont have the Permission to use that Command``')
			}
		    	break;
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
// Music Bot
	    case "musicbot":
		    message.channel.send("``Soon, but not soon enough.``")
		    break;
    }	
});		 	    
bot.login(process.env.BOT_TOKEN);
