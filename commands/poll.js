module.exports = {
    name: 'poll',
    description: "Encuesta!",
    permissions: [],
    execute(client, message, cmd, args, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'encuestas📆');
        if(!channel) return message.channel.send('Canal inexisnte!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#F9F99A')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setTitle('Dice:')
        .setDescription(messageArgs)
        .setFooter('Bot creado por Bumblebee Kev#4596');

        channel.send(embed).then((msg) =>{
            msg.react('👍🏻');
            msg.react('👎🏻');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}    
