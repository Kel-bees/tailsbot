module.exports = {
    name: 'help-mod',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FDEAFF')
        .setTitle('Comandos de moderacion')
        .setDescription('Mod!')
        .addFields(
            {name: 'GT!ban', value: 'BANEA!'},
            {name: 'GT!kick', value: 'Kickea!'},
        )
        .setImage('https://cdn.discordapp.com/avatars/854477639514587157/88427f9bee8b1b01234a05e7224fb9dd.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
