module.exports = {
    name: 'help-misc',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F9F99A')
        .setTitle('Comandos random')
        .setDescription('Random!')
        .addFields(
            {name: '%poll', value: 'Crea una encuesta!'},
            {name: '%suggest', value: 'Haz una sugerencia!'},
        )
        .setImage('https://cdn.discordapp.com/avatars/853511511472734218/62383ce3b40480725f4f5a28ecab7483.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
