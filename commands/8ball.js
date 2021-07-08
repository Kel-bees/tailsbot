module.exports = {
    name: '8ball',
    description: '8ball!',
    permissions: [],
    async execute(client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply('Pregunta algo!')
        let replies = ["si.", "Parece que si.", "Okey,si.", "Claro", "Si,si y SI", "no.", "Parece que no.", "Eh,no.", "Por ahora no", "No,no y NO", "Mmm no sé...", "Mmm intenta otravez!", "No te escuche!", "DILO OTRA VEZ!"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#F9F99A")
        .addField("Pregunta", question)
        .addField("Respuesta", replies[result])

        message.channel.send(ballembed)
    }
}
