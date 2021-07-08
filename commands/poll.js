module.exports = {
    name: 'poll',
    description: "Encuesta!",
    permissions: [],
    execute(client, message, cmd, args, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '🎫-pollandsuggestions');
        if(!channel) return message.channel.send('Poll channel doesnt exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#003332')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setTitle('Says:')
        .setDescription(messageArgs)
        .setFooter('Bot created and powered by Bumblebee Kev#4596');

        channel.send(embed).then((msg) =>{
            msg.react('👍🏻');
            msg.react('👎🏻');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}    
