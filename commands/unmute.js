module.exports = {
    name: 'unmute',
    description: "Unmutea!",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, cmd, args, Discord){
        const target = message.mentions.users.first();
        if(target){

            let mainRole = message.guild.roles.cache.find(role => role.name === 'member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> was unmuted!`);
        } else{
            message.channel.send('I couldnt find that member!');
        }
    }
}
