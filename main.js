const Discord = require('discord.js');
const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () =>{
    console.log('Linea');
    client.user.setActivity('Prefijo: %', { type: "WATCHING" }).catch(console.error)
});


client.login(process.env.DISCORD_TOKEN);
