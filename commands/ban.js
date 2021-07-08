module.exports = {
    name: 'ban',
    description: 'ban!',
    permissions: ["ADMINISTRATOR"],
    execute(client, message, cmd, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id)
                message.channel.send("You banned that user!!");  
                memberTarget.ban();
        }else{
            message.channel.send(`You cant ban that user!`)


        }      
    }
}
