// Load up the discord.js library
const Discord = require("discord.js");
//ChatBot Configs
const Cleverbot = require("cleverbot-node");
const economy = require('discord-eco');
const fs = require('fs');
const YTDL = require('ytdl-core');
const sql = require("sqlite");
const clbot = new Cleverbot;
clbot.configure({botapi: "CC74amM7cQZbj-XPp-OAY1pesPw"});
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`OMAE WA MOU SHINDEIRU`);
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
	  "20% gaystraight",
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
  //Lets do the chatbot
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
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.roles.some(r=>["[Admin]", "[Moderator]", "[Trial Mod]", "[Jr. Mod]", "~Discord Manager~"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    // get the delete count, as an actual number.
	  message.reply(", This command is disabled due to it not working correctly.");
  }
  
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
  
  if(command === "help") {
	  message.channel.send("**Please check your dms** :mailbox_with_mail:");
    	message.author.send('**=== Help ===**\n\n**Note:** Please use ``-staffcommands`` for staff commands. \n**-help** = Shows you this page.\n**-serverinfo** = Shows you the info about the discord server\n**-userinfo** = Shows the info about you.\n**-8ball** = Selects a random answer about your question.\n**-ping** = Pings, what else.\n**-meme** = Our love, our life, our dank memes.\n**-dab** = DABS ON EM HATERZ.\n**-roast** = Roasts people\n**-say** = Says the message that the user told the bot to say\n**-whosyourdada** = you know\n**-pizza** = You know this too lol\n**-shoot** = shoots people\n**-nou** = no you\n**-avatar** = displays the profile picture of the tagged person\n**-gay** = gay simulator\n**-straight** = Straight simulator\n**-roles** = Displays the roles in the server\n**-dance** = People dance, not the bot. silly.\n**-hug** = Huggies!\n**Type** @Outbreak (Question or anything), He answers it or talks to you.\n``Please use - as the prefix``\n**Special thanks to ethan for all of this**\n**Chatbot is down for some time because its not working. Will be fixed soon.**');
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
				if(!member) message.reply("auto-kick-in-the-nuts ?")
				else {
					const embed = new Discord.RichEmbed()
					var rdmgif =["https://media1.tenor.com/images/348eae99cbaf68283903d74ee85e67ce/tenor.gif", "https://media1.tenor.com/images/e98b912ad0f5e74e53efc1c20aea59be/tenor.gif", "https://media1.tenor.com/images/f03ec2fc5f712b344f5b35d644140236/tenor.gif", "https://media1.tenor.com/images/cc5bc86ee3be2219b0976d320ecf5276/tenor.gif", "https://media1.tenor.com/images/9982265fa4c53204c66ea7fc9997aee0/tenor.gif"];
					var rdmgif2 = Math.floor(Math.random()*rdmgif.length);
						embed.setTitle(message.author.username + " kick the nuts of " + member.user.username)
						embed.setAuthor(bot.user.username, bot.user.avatarURL)
						embed.setColor(0x00AE86)
						embed.setFooter(bot.user.username, bot.user.avatarURL);
						embed.setImage(rdmgif[rdmgif2])
						embed.addField("Rip the nuts of " + member.user.username, "¯\_(ツ)_/¯")
						embed.setTimestamp()
						message.channel.send({embed});
				})
}
});

client.login(process.env.BOT_TOKEN);
