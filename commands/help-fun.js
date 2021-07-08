module.exports = {
    name: 'help-fun',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F9F99A')
        .setTitle('Comandos de diversion')
        .setDescription('Diversion!')
        .addFields(
            {name: '%8ball', value: 'Pregunta lo que sea,te respondere!'},
            {name: '%PPT', value: 'Piedra papel o tijeras!'},
            {name: '%tictactoe', value: 'Juego de tictactoe.'},
            {name: '%meme', value: ' memes!.'},

        )
        .setImage('https://cdn.discordapp.com/avatars/853511511472734218/62383ce3b40480725f4f5a28ecab7483.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
