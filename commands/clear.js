const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //-clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Can not do so!");
  if(!args[0]) return message.channel.send("Can not do so!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**Cleared ${args[0]} messages.**`).then(message => message.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
