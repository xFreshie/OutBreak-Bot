// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
//ChatBot Configs
const db = require('quick.db');
const Cleverbot = require("cleverbot-node");
const economy = require('discord-eco');
const fs = require('fs');
const YTDL = require('ytdl-core');
const sql = require("sqlite");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC74amM7cQZbj-XPp-OAY1pesPw"});
client.on("message", function(message) {
    console.log(`(General) ${message.author.username}: ${message.content} (in ${message.guild} and ${message.channel})`);
    if (message.author.equals(client.user)) return;
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
})
    //-----------------CHAT MODA FKIN BOT-----------------  Better not Touch this  Better not Touch this
    // --------------------------------------------
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`OMAE WA MOU SHINDEIRU`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`OMAE WA MOU SHINDEIRU`);
});


	client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  //Vars
  
  var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc you"
];

		
  var gay = [
	  "5% gay",
	  "10% gay",
	  "15% gay",
	  "20% gay",
	  "25% gay",
	  "30% gay",
	  "35% gay",
	  "40% gay",
	  "45% gay",
	  "50% gay",
	  "55% gay",
	  "60% gay",
	  "65% gay",
	  "70% gay",
	  "75% gay",
	  "80% gay",
	  "85% gay",
	  "90% gay",
	  "95% gay",
	  "100% gay",
	  "OVER 9000% GAY"
]

  var straight = [
	  "5% straight",
	  "10% straight",
	  "15% straight",
	  "20% straight",
	  "25% straight",
	  "30% straight",
	  "35% straight",
	  "40% straight",
	  "45% straight",
	  "50% straight",
	  "55% straight",
	  "60% straight",
	  "65% straight",
	  "70% straight",
	  "75% straight",
	  "80% straight",
	  "85% straight",
	  "90% straight",
	  "95% straight",
	  "100% straight",
	  "NOT EVEN STRAIGHT"
]
  
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

var dance = [
	'https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif',
	'https://media.giphy.com/media/57Y0HrGWcu4WYvc6vE/giphy.gif',
	'https://media.giphy.com/media/jzaZ23z45UxK8/giphy.gif',
	'https://media.giphy.com/media/LLHkw7UnvY3Kw/giphy.gif',
	'https://media.giphy.com/media/4j9XOYo6IVDK8/giphy.gif'
]

var beat = [
	'https://i.ytimg.com/vi/f5cMwOUPPFI/hqdefault.jpg'
]

var pizza = [
	'https://i.imgur.com/Kp3DeAr.png'
]

var nou = [
	'https://i.imgur.com/D8SVWl6.gif'
]

var suppl = [
	'https://i.imgur.com/44CKjk2.png'
]

var supple = [
	'suppL',
	'SUP EL',
	'SOOUPL',
	'SEPLE',
	'SUP L',
	'supple'
]

var pathi = [
	'pathii',
	'pathicc',
	'patheccc',
	'path',
	'pathi'
]

var pathii = [
	'https://i.imgur.com/Q354oWZ.png'
]

var wot = [
	'https://media.giphy.com/media/nipbykblMUnu0/giphy.gif'
]
  // Let's go with a few common example commands! Feel free to delete or change those.
  //
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
	message.react('🏓')
    const m = await message.channel.send("Not pinging for you m8 get outta here");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
		if(!message.member.hasPermission('KICK_MEMBERS'))
		return message.reply("You can't kick... guys don't be silly. :/ !");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
   }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
		if(!message.member.hasPermission('BAN_MEMBERS'))
		return message.reply("You can't ban.. guys, don't be silly. :/ !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
      }
  
  if(command === "prune") {
    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Sorry, you don't have permissions to use this!");
    // get the delete count, as an actual number.
    let amount = message.content.split(" ").splice(1, 2).join(" ");
    if(amount < 1) {
      return message.reply("The amount of messages to remove is 1-100.");
    }
    if(amount > 100) {
      return message.reply("Choose a number between 1-100.");
    }
    message.channel.bulkDelete(amount);
    message.delete()
    message.channel.send(`${message.author} Pruned: ${amount} messages`).then(m => m.delete(2500));
};
  
  if(command === "8ball") {
    if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.send("Please mention a **question** to answer.");
  }
  
  if(command === "userinfo") {
	    let usar = message.mentions.users.first() ? message.mentions.users.first() : message.author
            var embed = new Discord.RichEmbed()
            .setAuthor(usar.username)
            .setDescription("This is the user's info!")
            .setColor("#9B59B6")
            .addField("Full Username", `${usar.username}#${usar.discriminator}`)
            .addField("ID", usar.id)
            .addField("Created At", usar.createdAt);
        message.channel.send(embed);
  }
  
  if(command === "botinfo") {
			let bicon = client.user.displayAvatarURL;
			let botembed = new Discord.RichEmbed()
			.setDescription("**Bot Information**")
			.setColor("#072ebc")
			.setThumbnail(bicon)
			.addField("Bot Name", client.user.username)
			.addField("Bot info", "I'm an A.I Bot created by **xFreshie and Eshan**. Please use **-help** to check my commands. Have fun :wink:")
			.addField("Created on", client.user.createdAt);
            message.channel.send(botembed);
  }
  
  if(command === "serverinfo") {
	  		if(message.channel.type === "dm") {
			message.author.send("**Please use that command in a server.**");
			}
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
  }
  if(command === "meme") {
	message.delete().catch(O_o=>{});
    message.channel.send("***Danke ME ME***", {
        file: (memelist[Math.floor(Math.random() * memelist.length)])
    });
  }
  
  if(command === "dab") {
    message.channel.send("**<o/**", {
        file: (dab[Math.floor(Math.random() * dab.length)])
    });
  }
  
  if(command === "roast") {
	  let useeer = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.channel.send(`<@${message.mentions.users.first().id}>` +", " + roast[Math.floor(Math.random() * roast.length)]);
  }
  
  if(command === "whosyourdada") {
    message.channel.send("who's your brudda, does he kno da wae?");
  }
  
  if (command === "pizza") {
    message.channel.send("There is only one pizza... i mean 2 pizzas left.\nOne is this one :pizza: and one is aland...");
  }
  
  if(command === "uwot") {
    message.channel.send("**u wot m8 i besh yur hed**", {
        file: (wot[Math.floor(Math.random() * wot.length)])
    });
  }
  
  if (command === "staffcommands") {
    message.channel.send("**=-=-=-Staff Help=-=-=-=**\n-kick \n -ban \n-purge\n ``These are the only commands for now.``");
  }
	
  if (command === "mute") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this");
	  //Now the message
	  message.reply(", You cannot use this yet.");
  }
	
  if(command === "nou") {
    message.channel.send("** NO U **", {
        file: (nou[Math.floor(Math.random() * nou.length)])
    });
  }
  if(command === "ships") {
	  message.channel.send("**Color x ALAND** ``COLAND``\n**EnderKawaii x Nicolidas** ``Enderlidas``\n**Iza x Cleaner** ``Cleanza``\n**Enceladus x CheetehZ** ``Cheeceladus``\n**Moncef x roblox** ``OOF``\n``AND FINALLY!`` **Fresh x Mueez** ``Freshtard``");
  }
  if(command === "bae") {
	  message.channel.send("Sergeant retard aka Bae Mueez.");
  }
  if(command === "secretcommands") {
	  message.channel.send("**=-=-Secret Commands=-=-**\n-Beat\n-Bae\n-ships\n-vaughn\n-supple\n-lostkids");
  }
  if(command === "beat") {
	  message.channel.send("**Are you talking about beat_pa?** ``OMG``", {
		  file: (beat[Math.floor(Math.random() * beat.length)])
	  });
  }
  if(command === "lostkids") {
	  message.channel.send("**The lost kids in this town are**\n**Trash**\n**Sexified**\n**Cleaner**\n**Iza**\n**Koni**\n**Benji**\n**caer**\nIf you find any of them, please call 911-FOICKOFF.");
  }
  if(command === "avatar") {
  let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x542437,
      description:"Here is "+user.username+"'s avatar: *[url]("+ava+")*",
      image:{url:ava}
  }
  message.channel.send("", {embed});
  }
  if(command === "shoot") {
      message.channel.send(`<@${message.author.id}>  **(　-_･) ︻デ═一 ▸** <@${message.mentions.users.first().id}>`);
  }
  if(command === "roles") {
	  		if(message.channel.type === "dm") {
			message.author.send("**Please use that command in a server.**");
			}
		const roles = message.guild.roles.map(r => r.name).join('\n');
		const roleEmbed = new Discord.RichEmbed()
			.setColor('NAVY')
			.setTitle(message.guild.name)
			.addField('Roles:', roles)
			.setFooter('noob')
			.setTimestamp(new Date());

		return message.channel.send({ embed: roleEmbed });
  }
  if(command === "gay") {
	  let useeeer = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.channel.send("**" + `<@${message.mentions.users.first().id}>` + "** is **" +  gay[Math.floor(Math.random() * gay.length)] + "**");
  }
  if(command === "dance") {
	  message.channel.send("**DANCE DANCE DANCE TODAY**", {
		  file: (dance[Math.floor(Math.random() * dance.length)])
    });
  }
  if(command === "ty") {
	  let noob = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.delete().catch(O_o=>{});
	  message.channel.send("**Thanks for reporting** " + `<@${message.mentions.users.first().id}>`);
  }
  if(command === "respects") {	  
		  message.channel.send('Press **F** to pay respects').then((m) => {
			  m.react('🇫');
			  message.delete();
		  })
	  }
  if(command === "move") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
	  let noob = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.delete().catch(O_o=>{});
	  message.channel.send("**Please move to #general for further chatting.** " + `<@${message.mentions.users.first().id}>`);
  }
  if(command === "proof") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
	  let noob = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.delete().catch(O_o=>{});
	  message.channel.send("**This is not enough proof, please provide more proof if possible, thanks!** " + `<@${message.mentions.users.first().id}>`);
  }
  if(command === "notpunishable") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
	  let noob = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.delete().catch(O_o=>{});
	  message.channel.send("**That's not punishable, thanks for reporting.** " + `<@${message.mentions.users.first().id}>`);
  }
  if(command === "mod") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
	  let noob = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.delete().catch(O_o=>{});
	  message.channel.send("**Please wait for a mod to come online, tmods can't ban.** " + `<@${message.mentions.users.first().id}>`);
  }
  if(command === "frostrealms") {
   if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
	  message.channel.send("**=-=-= FrostRealms Support Team =-=-=**\n-ty\n-move\n-proof\n-notpunishable\n-mod");
  }
if(command === "hug") {
      message.channel.send(`<@${message.author.id}>  **⊂（:heart: ⌂ :heart:）⊃** <@${message.mentions.users.first().id}>`);
}
if (command === "getsomehelp") {
    let member = message.member;
    if (!member.voiceChannel) return send("**You must be in a voice channel for this command.**")
    if (message.guild.member(client.user).voiceChannel) return send("**Im already playing something.**")

    member.voiceChannel.join().then(voiceConnection => {
        voiceConnection.playFile(".Nitro/images/stopit.mp3")
        setTimeout(() => voiceConnection.disconnect(), 4000)
    }).catch(console.log)
}
if (message.content === "iza") {
	message.channel.send("Is iza a hoe?");
}
  if(command === "supple") {
    message.channel.send(supple[Math.floor(Math.random() * supple.length)], {
        file: (suppl[Math.floor(Math.random() * suppl.length)])
    });
  }
if(command === "vaughn") {
	message.channel.send("no u*");
}
if(command === "straight") {
	  let useeeeer = message.mentions.users.first() ? message.mentions.users.first() : message.author
	  message.channel.send("**" + `<@${message.mentions.users.first().id}>` + "** is **" +  straight[Math.floor(Math.random() * straight.length)] + "**");
  }
if(command === "fortnitestats") {
	let usaaar = message.mentions.users.first() ? message.mentions.users.first() : message.author
	message.channel.send("**" + `<@${message.mentions.user.first().id}>` + "'s **fortnite stats are**\n**KD** : 0.10 \n**Wins** : 2\n **Kills** : 1 \n**Matches played** : 10");
}
if(command === "pathi") {
	message.channel.send(pathi[Math.floor(Math.random() * pathi.length)], {
		file: (pathii[Math.floor(Math.random() * pathii.length)])
	});
}
if(command === "nuts") {
	let member = message.mentions.members.first()
	if(!member) message.reply("you wanna kick em in the nuts?")
	else {
		message.channel.send(`<@${message.author.id}> **KICKS THE BALLZ OF** <@${message.mentions.users.first().id}>`)
	}
}
if(command === "coin") {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const coin = getRandomInt(0, 1)
  message.reply(coin==0?`🎰 The coin gave **heads**`:`🎰 The coin gave **tails**`);
}
if(command === "setgame") {
exports.run = (bot, msg, [args, ...game]) => {
  let type = args;
  if (!args || args.size == 0) type = 0
  bot.user.setActivity(game.join(" "), {type: type});
	message.channel.send("Game set.");
}
}
if(command === "dabpolice") {
	message.react("👮");
	message.channel.send("Calling all units, shots fired\nShots fired in front of the Supreme store\nThere's about to be a 261 in progress\nSend all available units\nSend in the back-up\nSend in the big guns\nSend in the canine unit\nSend in the... f**k");
}
if(command === "tellmeaboutit") {
	message.react("👉");
	message.react("👌");
	message.channel.send("**Check your message's reacts lol**");
}
if(command === "setprefix") {
			let guild = message.guild.id
			if (!guild) {client.respond(message, "Something went wrong :v"); return;}
			
			if (!args[0]) {client.respond(message, 'Current prefix: \`' + (guild.prefix ? guild.prefix : config.prefix) + '\`'); return;}
			
			let author = message.guild.members.array().filter(m => {return m.id == message.author.id});
			if (!author[0].hasPermission('MANAGE_GUILD')) {client.respond(message, "You don't have the administator permission!"); return;}
			
			guild.prefix = args[0]; 
			client.GUILDS.set(guild.id, guild);
			client.respond(message, "Changed prefix to: \`" + args[0] + '\`');
}
if(command === "goodlaughing") {
	message.channel.send("This moderators are to funny the can say what the want but when i say 1 time Rekt and ez? The warn me and kick me from the server Fresh/xStar and neko saying all the time to Players 'This kid is to funny hahaah i cant stop laugh'''around 7 times and when i say because i kild him Ez? the warn me for toxic is that toxic the are saying Kids and noob to me but when i say Rekt the warn me instant to funny i ask Neko to f3 because he spammed me when he eating soup he also dont wanna show me his screenshot i ask Why you dont showing? Fresh say because he is staff? SO? hahaaha so if you are rank moderator you mean that you cant hack? thats so sad the doing notting when someone is doing racist and saying the N word to people i told you already frost is dead when trash left everything changed really sad");
}
if(command === "warn") {
	let member = message.mentions.members.first()
	if(!member) message.reply("**Usage** -warn (user) (reason)")
	else {
		message.channel.send(`<@${message.mentions.users.first().id}> **was warned by** <@${message.author.id}>`)
	}
}
if(command === "invite") {
	message.channel.send("**Invite link sent in pm**");
	message.author.send("__**Bot Invite Link**__: \nhttps://discordapp.com/oauth2/authorize?client_id=411810957258522624&permissions=8&scope=bot");
}
if(command === "help") {
	message.react("📧");
	message.channel.send("**Please check your dms** :mailbox_with_mail:");
	message.author.send("**OutBreak** commands:\n \n``-help`` - Shows this message\n``-ping`` - Check the bot's latency\n``-userinfo @user`` - Shows the info about the tagged user.\n \n__**Moderation**__:\n \n``-kick @user reason`` - Kicks the user with the following reason\n``-ban @user reason`` - Bans the user with the following reason\n``-prune (amount)`` - prunes the amount of messages\n``-warn @user reason`` - Warns the user with the following reason\n \n__**Fun**__:\n \n``-8ball (question)`` - Selects a random answer for your question\n``-dab`` - Dabbin'\n``-dabpolice`` - DAB POLICE INCOMING\n``-whosyourdada`` - MY DADA\n``-roast @user`` - Roasts the user badly\n``-pizza`` - PIZZAA\n``-shoot`` - Shoot them criminals\n``-nou`` - Your mom gay.. no u\n``-gay`` - Gay simulator\n``-straight`` - Straight simulator\n``-dance`` - Sends a random dancing gif\n``-hug`` - You can finally hug your besties! ~~or lonely people~~\n``-nuts`` - Kicks em in the nutz\n``-coin`` - Heads or Tails\n``-meme`` - Random normie memes\n \n__**Other Useful Commands**__:\n \n``-say`` - The bot says the thing...\n``-serverinfo`` - Information about the server\n``-avatar @user`` - Sends the url of the avatar of a person\n``-roles`` - Displays the roles in the server\n``-nitro`` - Displays the nitro subscribed users in a server\n``-discrim (discrim)`` - Displays the users with the discrim\n \n__**Chat Bot**__:\n \nTag ``@OutBreak`` for him to talk with you!\n \n __**Other helping**__: \n \n**Official Server invite**: https://discord.gg/aSfZp9D \n**Bot Invite Link**: ``-invite``\nIf you want **help** with anything else, private message **Freshie#7896**");
}
if(command === "spam") {
		if(!message.member.hasPermission('KICK_MEMBERS'))
		return message.reply("You can't spam.. guys, don't be silly. :/ !");
	message.channel.send("I ain't SwegBot you stupid idiot, go tell him to spam, not me.\n ME A GOKD BOI");
}
if(command === "nitro") {
  var nitro = '';
  message.guild.members.map(usr => {
    if (usr.avatar != null) {
      if (usr.avatar.startsWith("a_")) {
        nitro += usr.mention + "\n";
      }
    }
  });

  var nitro2 = new Discord.RichEmbed()
  .setAuthor("Nitro Users", "http://i.imgur.com/H5CwSY2.png")
  .setDescription("The following users on this guild have nitro:\n\n" + nitro)
  .setColor("#072ebc")
  .setThumbnail("http://i.imgur.com/Ls5pRMF.png");
  message.channel.send(nitro2)
};
if(command === "discrim") {
    let args = message.content.split(' ').splice(1).join(' ') || message.author.discriminator;
    const res = client.users.filter(u => u.discriminator === `${args}`).map(u => u.username);
    var embed = new Discord.RichEmbed()
    if (res.length === 0) {
        embed.setTitle(`No users found with discrim ${args}`)
        .setColor("#072ebc")
        message.channel.send({embed})
    } else {
        embed.setTitle(`Users Found With Discrim ${args}`)
        .setDescription(`${res.join('\n')}`)
        .setColor("#072ebc")
    message.channel.send({embed})
      }
}
if(command === "test") {
const start = ['a lazy', 'a stupid', 'an insecure', 'an idiotic', 'a slimy', 'a slutty', 'a smelly', 'a pompous', 'a communist', 'a dicknose', 'a pie-eating', 'a racist', 'an elitist', 'a white trash', 'a drug-loving', 'a butterface', 'a tone deaf', 'a ugly', 'a creepy', 'an artless', 'a bawdy', 'a beslubbering', 'a bootless', 'a churlish', 'a cockered', 'a clouted', 'a craven', 'a currish', 'a dankish', 'a dissembling', 'a droning', 'an errant', 'a fawning', 'a fobbing', 'a frothy', 'a gleeking', 'a goatfish', 'a gorbellied', 'an impertinent', 'an infectious', 'a jarring', 'a loggerheaded', 'a lumpish', 'a mammering', 'a mangled', 'a mewling', 'a paunchy', 'a pribbling', 'a puking', 'a puny', 'a qualling', 'a rank', 'a reeky', 'a roguish', 'a ruttish', 'a saucy', 'a spleeny', 'a spongy', 'a surly', 'a tottering', 'an unmuzzled', 'a vain', 'a venomed', 'a villainous', 'a warped', 'a wayward', 'a weedy', 'a yeasty', 'a lilly-livered', 'a rotten', 'a stinky', 'a lame', 'a dim-witted', 'a funky', 'a crusty', 'a steamy', 'a drizzly', 'a grizzly', 'a squirty', 'an uptight', 'a hairy', 'a husky', 'an arrogant', 'a nippy', 'a chunky', 'a smelly', 'a drooling', 'a crusty', 'a decrepic', 'a stupid', 'a moronic', 'a greasy', 'a poxy', 'an ugly', 'a smelly', 'a putrid', 'a shitty', 'an assinine', 'a sickening']

const middle = ['douche', 'ass', 'turd', 'rectum', 'butt', 'cock', 'shit', 'crotch', 'bitch', 'turd', 'prick', 'slut', 'taint', 'fuck', 'dick', 'boner', 'shart', 'nut', 'sphincter', 'base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-born', 'full-gorged', 'guts-gripping', 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'milk-livered', 'motly-minded', 'onion-eyed', 'plume-plucked', 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing', 'rump-red', 'shard-borne', 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'unchin-snouted', 'weather-bitten', 'hiney', 'poop', 'toot', 'wedgie', 'stool', 'fudge', 'bum', 'potty', 'dookie', 'pudding', 'sphincter', 'booger', 'feces', 'snot', 'crust', 'badonk-a', 'crud', 'sludge', 'tool', 'shit-kicking', 'monkey-licking', 'butt-munching', 'crotch-sniffing', 'donkey-spanking', 'fashion-illiterate', 'worm-ridden', 'grub-fucking', 'lathered-up', 'pasty-waisted', 'snot-flicking', 'fart-eating']

const end = ['pilot', 'canoe', 'captain', 'pirate', 'hammer', 'knob', 'box', 'jockey', 'nazi', 'waffle', 'goblin', 'blossom', 'biscuit', 'clown', 'socket', 'monster', 'hound', 'dragon', 'balloon', 'apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewdster', 'lout', 'maggot-pie', 'malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'ratsbane', 'scut', 'skinsmate', 'strumpet', 'varlot', 'vassal', 'whey-face', 'wagtail', 'squeegee', 'turtle', 'cabbage', 'bomb', 'sniffer', 'binkie', 'stump', 'nugget', 'whistle', 'twig', 'knuckle', 'burger', 'hotdog', 'loaf', 'freckle', 'soldier', 'kernal', 'shingle', 'warrior', 'hemorrhoid', 'fuckface', 'asshole', 'scumbucket', 'toerag', 'hackwack', 'imbecile', 'stunodigan', 'maggot', 'hipster', 'gargabe', 'jerkstore']

const roll = type => type[Math.floor(Math.random() * type.length)]

  message.channel.send(`${user}, you know what? you're nothing but ${roll(start)} ${roll(middle)} ${roll(end)}.`)
};
	}
});
client.login(process.env.BOT_TOKEN);
