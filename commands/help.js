module.exports = {
    name: 'help',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FDEAFF')
        .setTitle('Mis comandos')
        .setDescription('Todos mis comandos!')
        .addFields(
            {name: 'GT!help-fun', value: 'Comandos de diversion!'},
            {name: 'GT!help-mod', value: 'Comandos de moderacion!'},
        )
        .setImage('https://cdn.discordapp.com/avatars/854477639514587157/88427f9bee8b1b01234a05e7224fb9dd.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
