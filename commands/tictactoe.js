const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe-start',
    description: "Start a match!",
    aliases: ['tictactoe'],
    permissions: [],
    async execute(client, message, cmd, args, Discord){
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Especifica con quien quieres luchar!');

        new tictactoe({
            player_two: member,
            message: message
        })

    }
}
