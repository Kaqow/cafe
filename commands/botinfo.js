const Discord = require("discord.js");
const stats = require("../package.json");

module.exports.run = async (bot, message, args, useprefix) => {
  message.delete().catch();
  let bicon = bot.user.displayAvatarURL;
  let statsembed = new Discord.RichEmbed()
    .setTitle("Bot Statistics")
    .setDescription(stats.description)
    .setColor("#33fede")
    .setThumbnail(bicon)
    .addField("Name", bot.user.username)
    .addField("Created on", bot.user.createdAt)
    .addField("Current version", stats.version)
    .setFooter(`Creator: ${stats.author}`);
  message.channel.send(statsembed);
}

module.exports.help = {
  name: "botinfo"
}
