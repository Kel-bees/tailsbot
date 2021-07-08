module.exports = {
    name: 'help-fun',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FDEAFF')
        .setTitle('Comandos de diversion')
        .setDescription('Diversion!')
        .addFields(
            {name: 'GT!8ball', value: 'Pregunta lo que sea,te respondere!'},
            {name: 'GT!PPT', value: 'Piedra papel o tijeras!'},
            {name: 'GT!tictactoe', value: 'Juego de tictactoe.'},
            {name: 'GT!meme', value: ' memes!.'},

        )
        .setImage('https://cdn.discordapp.com/avatars/854477639514587157/88427f9bee8b1b01234a05e7224fb9dd.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
