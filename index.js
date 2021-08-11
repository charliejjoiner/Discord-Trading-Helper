/* eslint-disable no-unused-vars */
const Discord = require ("discord.js");
const { Intents } = Discord;

const intents = new Intents ();

for(const intent of Object.keys (Intents.FLAGS)){
intents.add(intent);
}
const { token } = require('./config.json');
const client = new Discord.Client ({
  intents: intents
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);
