const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

 let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 if(!tomute) return message.reply("No user specified!");
 if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute this user!");
 let muterole = message.guild.roles.find( mute => mute.name === "muted");

 if(!muterole){
   try{
     muterole = await message.guild.createRole({
       name: "muted",
       color: "#000000",
       permissions:[]
     })
     message.guild.channels.forEach(async (channel, id) => {
       await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
       });
     });
   }catch(e){
     console.log(e.stack)
   }
 }

let mutetime = args[1];
if(!mutetime) return message.reply("You didn't specify a time!");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> has been unmuted.`);
}, ms(mutetime));

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "tempmute"
}
