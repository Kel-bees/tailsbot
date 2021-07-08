module.exports = {
    name: 'ppt-start',
    description: "Start a rock,paper,scissors match!",
    aliases: ['ppt', 'PPT'],
    permissions: [],
    async execute(client, message, cmd, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle("Piedra,papel o tijeras!")
        .setDescription("Reacciona para jugar!")
        .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("📄")
        await msg.react("🗻")
        await msg.react("✂")

        const filter = (reaction, user) => {
            return ['📄', '🗻', '✂'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['📄', '🗻', '✂']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 600000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("Resultado")
                .addField("Elegiste:", `${reaction.emoji.name}`)
                .addField("Yo elegi:", `${me}`)
                await msg.edit(result)

                if((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "✂" && reaction.emoji.name === "📄") || 
                (me === "📄" && reaction.emoji.name === "🗻")) {
                    message.reply("Perdiste!");
                } else if (me === reaction.emoji.name) {
                    return message.reply("Empate!");
                } else {
                    return message.reply("Ganaste!");
                }
             })
             .catch(collected => {
                 message.reply('Juego cancelado!')
             })

    }
}
