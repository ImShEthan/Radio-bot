const { Client } = require('discord.js');
const client = new Client();
var request = require('request');


const broadcast = client.voice.createBroadcast();


let servid = "ID" // Server ID
let chanid = "ID" // Channel ID
let flux = "http://direct.mouv.fr/live/mouv-midfi.mp3" //flux link
let token = "TOKEN" // Your token



client.on('ready', () => {
	console.log("Bot ready")
	client.user.setActivity("https://github.com/ImShEthan)
	client.set
	client.guilds.cache.get(servid).channels.cache.get(chanid).join()
	.then(connection => {
		broadcast.play(flux);
		connection.play(broadcast, { volume: 0.1 });
	})
});
client.login(token);
