const randomPuppy = require ('random-puppy');

module.exports = {
    name: 'meme',
    description: "Random meme!",
    permissions: [],
    async execute(client, message, cmd, args, Discord) {
        const subReddits = ["meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Aca hay un **meme** de reddit.`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
 }   
