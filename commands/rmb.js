module.exports = {
    name: 'rmb',
    description: 'replies with the conversion of rmb to GBP',
    execute(client, messageCreate, args) {
        const exchange = 0.112893;
        const rmbval = args[0];
        const gbpval = roundTo((rmbval * exchange), 2);

        function roundTo(n, digits) {
            if (digits === undefined) {
              digits = 0;
            }
            const multiplicator = Math.pow(10, digits);
            n = parseFloat((n * multiplicator).toFixed(11));
            const test = (Math.round(n) / multiplicator);
            return +(test.toFixed(digits));
          }

        if(!args[0]) return messageCreate.reply('Please enter an amount to convert.');
        else if(isNaN(args[0])) return messageCreate.reply('Please enter a real number!');
        else return messageCreate.reply(rmbval + '¥ is worth £' + gbpval);
    },
};