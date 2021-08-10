/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);