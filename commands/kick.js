module.exports = {
    name: 'kick',
    description: "Kickea!",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, cmd, args, Discord) { 
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id)
                message.channel.send('You kicked that user!')
                memberTarget.kick();
        }else{
            message.channel.send(`You cant kick that user!`)


     }
   }
 }
