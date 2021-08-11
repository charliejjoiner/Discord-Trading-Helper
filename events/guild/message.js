/* eslint-disable no-unused-vars */
module.exports = (Discord, client, messageCreate) => {
    const prefix = '!';
    if(!messageCreate.content.startsWith(prefix) || messageCreate.author.bot) return;
    const args = messageCreate.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command) command.execute(client, messageCreate, args, Discord);
};