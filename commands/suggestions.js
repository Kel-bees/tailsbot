module.exports = {
    name: 'suggest',
    description: "Encuesta!",
    aliases: ['suggestion', 'suggetions'],
    permissions: [],
    execute(client, message, cmd, args, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '📇preguntas📇');
        if(!channel) return message.channel.send('El canal de preguntas no existe!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#F9F99A')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setTitle('Pregunta:')
        .setDescription(messageArgs)
        .setFooter('Bot creado por Bumblebee Kev#4596');

        channel.send(embed).then((msg) =>{
            msg.react('♥');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}    
