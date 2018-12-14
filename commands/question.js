const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let member = message.mentions.users.first() || message.author;
  if(!args[2]) return message.reply("Please ask a full question!")
  let replies = ["Yes", "Totally bro, what ever you say", "Yeaah sure", "Im dying... Send help... I need @Kapow#5431", "I agree 100%!", "No", "Nope, never", "Try asking again", "I dont know!", "Why would I know...", "No comprehendo", "TALK TO THE HAND!", "Go away", "Im not talking to you anymore...", "You waste my time... smh", "If you get this answer I love you."];

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#33fede")
  .setThumbnail(member.displayAvatarURL)
  .addField("The question you asked was", question)
  .addField("The final answer is...", replies[result]);

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "question"
}
