const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Cant find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You got no permissions fam!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person is IMMUNE!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#ff7f23")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time Kicked", message.createdAt)
  .addField("Reason Kicked", kReason);

  let kickChannel = message.guild.channels.find( kicks => kicks.name === "logs")
  if(!kickChannel) return message.guild.channels.find( kicks => kicks.name === "Logs Channel not found.");

  message.delete().catch(O_o=>{});
  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

   return message.channel.send("User has been **Kicked** from the server! :O");
}

module.exports.help = {
  name: "kick"
}
