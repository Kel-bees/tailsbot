module.exports = {
    name: 'help-misc',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#85ca87')
        .setTitle('Comandos random')
        .setDescription('Random!')
        .addFields(
            {name: '*poll', value: 'Crea una encuesta!'},
            {name: '*suggest', value: 'Haz una sugerencia!'},
        )
        .setImage('https://cdn.discordapp.com/avatars/861326507221057598/54b7ec8e2b1e6d1cd2a06fb23d7105c6.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
