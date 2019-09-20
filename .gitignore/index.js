const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.on("message", (message) => {
    if(message.content == ".pp"){ // Check if content of message is "!ping"
    
      message.delete();
            var embed_embed = new Discord.RichEmbed()
        .setColor('#080707')
        .setDescription('***  Voici l´avatar demander***')
                
      .setImage (message.author.avatarURL)
        
       
        
        message.channel.send(embed_embed)
    
    }
      
    
    });

client.login('NjI0MTk1ODQ4MTI0ODkxMTQ2.XYNduQ.JpKy1A3fFFh-VoSYxN0X9dNAE1o');
