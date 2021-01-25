const http = require("http");
const express = require("express");
const app = express();
var server = require("http").createServer(app);


app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
  client.setMaxListeners(0);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("bonking simps and censoring profanity", {
  type: "PLAYING",
  url: "https://bit.ly/HOMIESONLY",
});
});
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});
client.on("message", msg => {
  if (msg.content === "who made you") {
    msg.reply("sk8ordiechicago#4958");
  }
});
client.on("message", msg => {
const f = ["fuck", "fuk", "Fuck", "Fuk"];
if( f.some(word => msg.content.includes(word)) ) {    msg.reply("fluff");
msg.delete();

      }
});
client.on("message", msg => {
  const s = ["shit", "Shit"];
if( s.some(word => msg.content.includes(word)) ) {
    msg.reply("tish");
    msg.delete();

  }
});
client.on("message", msg => {
  const b = ["bitch", "Bitch"];
if( b.some(word => msg.content.includes(word)) ) {
    msg.reply("witch");
    msg.delete();

  }
});
client.on("message", msg => {
   const ck = ["cock", "Cock"];
if( ck.some(word => msg.content.includes(word)) ) {
    msg.reply("chicken");
    msg.delete();

  }
});
client.on("message", msg => {
 const c = ["cunt", "Cunt"];
if( c.some(word => msg.content.includes(word)) ) {
    msg.reply("person");
    msg.delete();

  }
});
client.on("message", msg => {
  const w = ["whore", "Whore"];
if( w.some(word => msg.content.includes(word)) ) {
    msg.reply("horse");
    msg.delete();

  }
});
client.on("message", msg => {
  const a = ["ass", "Ass"];
if( a.some(word => msg.content.includes(word)) ) {
    msg.reply("donkey");
    msg.delete();

  }
});
/*client.on("message", msg => {
const swearWords = ["fuck", "shit", "bitch", "whore", "ass"];
if( swearWords.some(word => msg.content.includes(word)) ) {
  msg.delete();
}
});*/
client.on("message", msg => {
    if (msg.content === "gimme list") {
  const profanity = new Discord.MessageEmbed()
  .setColor('#cc00cc')
	.setTitle('Words To Use Instead Of Profanity Lmao')
	.setAuthor('sk8ordiechicago#4958, and wholesome pepe#2685', 'https://bit.ly/HOMIESONLY')
	.setDescription('Here are some words to use instead of profanity')
	.setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F43007ad315c8992433a6ddcb1648d14c%2Ftenor.gif%3Fitemid%3D5436856&f=1&nofb=1')
	.addFields(
		{ name: 'f-word', value: 'fluff' },
    { name: 's-word', value: 'tish' },
    { name: 'b-word', value: 'witch' },
    { name: 'c**k', value: 'chicken' },
    { name: 'w-word', value: 'horse' },
    { name: 'c-word', value: 'person (I dont know why you would even want to use this word)' },
    { name: 'a-word', value: 'donkey' },
        { name: 'stfu', value: 'shut up' },
    { name: 'wtf', value: 'wth' },

		{ name: '\u200B', value: '\u200B' },
		
	)
	.addField('Remember To Keep It PG, Kids!', 'Put that on my cordless zipline', true)
	.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.co%2Fimages%2Fa051059c7642e9a474a13e1ab7191fb6%2Fraw&f=1&nofb=1')
	.setTimestamp()
msg.reply(profanity);
  }
});
client.on("message", msg => {
    if (msg.content === "gimme commands") {
  const commands = new Discord.MessageEmbed()
  .setColor('#cc00cc')
	.setTitle('Commands')
	.setAuthor('WHOLESOME PEPE', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wixBz8ug0ZdjjfcofjyXmwHaEK%26pid%3DApi&f=1', 'https://bit.ly/HOMIESONLY',)
	.setDescription('List Of Wholesome Pepe Commands lol')
	.setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F43007ad315c8992433a6ddcb1648d14c%2Ftenor.gif%3Fitemid%3D5436856&f=1&nofb=1')
	.addFields(
		{ name: ' - gimme list', value: 'list of replacement words for profanity' },
    	{ name: ' - who made you', value: 'name of my creator' },
      	{ name: ' - who made you', value: 'name of my creator' },
   
		{ name: '\u200B', value: '\u200B' },
		
	)
	.addField('Remember these commands. Anytime you forget, just say "gimme commands"', 'Put that on my wingless plane', true)
	/*.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.co%2Fimages%2Fa051059c7642e9a474a13e1ab7191fb6%2Fraw&f=1&nofb=1')*/
	.setTimestamp()
msg.reply(commands);
  }
});
/*client.on("message", msg => {
const based = ["based", "Based", "bas3d", "Bas3d", "båsed", "bàsed", "básed", "bâsed", "b@sed", "bãsed", "bäsed", "BASED", "baséd", "basèd", "basëd", "Båsed", "Bāsed", "Băsed", "Băsed", "B@sed", "Básed", "Bàsed", "bĀSED", "Bãsed", "Bäsed",];
if( based.some(word => msg.content.includes(word)) ) {    msg.reply("You can't say that word until You explain to the admin what it means (yes, I'm talking to you LJ)");
msg.delete();

      }
});*/
client.on("message", msg => {
const stfu = ["stfu", "STFU"];
if( stfu.some(word => msg.content.includes(word)) ) {    msg.reply("not wholesome. try *shut up* instead");
msg.delete();

      }
});
client.on("message", msg => {
const wtf = ["wtf", "WTF"];
if( wtf.some(word => msg.content.includes(word)) ) {    msg.reply("not wholesome. try *wth* instead");
msg.delete();

      }
});
client.on("message", msg => {
const stfu = ["simp", "SIMP", "s1mp", "S1MP"];
if( stfu.some(word => msg.content.includes(word)) ) {    msg.reply("lolllll no s i m p i n g welcome here");
      }
});
client.login(process.env.BOT_TOKEN);

