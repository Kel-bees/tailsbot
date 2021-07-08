module.exports = {
    name: 'mute',
    description: "Mutea!",
    permissions: ["ADMINISTRATOR"],
    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first();
        if(target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Miembro');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);
            
            if (!args[1]) {   
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> fue muteado!`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> fue muteado`);

        }else{ 
            message.channel.send('No encontre ese miembro!');
        }
    }
}

