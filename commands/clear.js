module.exports = {
    name: 'clear',
    description: "Clear messages!",
    permissions: ["ADMINISTRATOR"],
    aliases: ['clr'],
    async execute(client, message, cmd, args, Discord) {
        if(!args[0]) return message.reply("Porfavor di cuantos mensajes quieres borrar!");
        if(isNaN(args[0])) return message.reply("Ese no es un numero!");
        
        if(args[0] > 100) return message.reply("No puedes borrar mas de 100 mensajes!");
        if(args[0] < 1) return message.reply("Debes borrar almenos un mensaje!");
      
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);                                                 
        });
    }
}
