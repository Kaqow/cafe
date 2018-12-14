const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.")
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("~Report~")
  .setColor("#8dff22")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(reports => reports.name === "reports")
  if(!reportschannel) return message.guild.channels.find( reports => reports.name === "Reports Channel not found.");

   message.delete().catch(O_o=>{});
   reportschannel.send(reportEmbed);

   return message.channel.send("User has been **Reported**");
}

module.exports.help = {
  name: "report"
}
