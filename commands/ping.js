module.exports = {
    name: 'ping',
    description: 'replies pong when the user says ping',
    execute(message) {
        message.reply('pong!');
    },
};