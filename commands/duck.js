const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
.get(`https://random-d.uk/api/v1/random?type=jpg`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#33fede")
  .setTitle("Quack for you.")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "quack"
}
