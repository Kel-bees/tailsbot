module.exports = {
    name: 'help',
    description: "Help us",
    permissions: [],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F9F99A')
        .setTitle('Mis comandos')
        .setDescription('Todos mis comandos!')
        .addFields(
            {name: '%help-fun', value: 'Comandos de diversion!'},
            {name: '%help-mod', value: 'Comandos de moderacion!'},
            {name: '%help-mod', value: 'Comandos Random!'}
        )
        .setImage('https://cdn.discordapp.com/avatars/853511511472734218/62383ce3b40480725f4f5a28ecab7483.webp?size=256')
        .setFooter('Bot creado por Bumblebee Kev#4596');
        
        message.channel.send(newEmbed)
    }


}
