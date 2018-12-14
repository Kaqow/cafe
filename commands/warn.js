const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"))

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("This user is IMMUNE!");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!wUser) return message.reply("You did not tag a valid user!")
if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("This user is IMMUNE!");
let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

 warns[wUser.id].warns++;

 fs.writeFile("./warnings.json", JSON.stringify(warns), (err)=> {
   if (err) console.log(err);
 });

 let warnEmbed = new Discord.RichEmbed()
  .setDescription("~Warns~")
  .setAuthor(message.author.username)
  .setColor("#8dff22")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Logs Channel not found.");

   if(warns[wUser.id].warns == 2){
     let muterole = message.guild.roles.find(`name`, "muted");
     if(!muterole) return message.reply("You should make that role!")

     let mutetime = "30m";
     await(wUser.addRole(muterole.id));
     message.channel.send(`${wUser.tag} has been temporarily muted for 30 minutes.`);

     setTimeout(function(){
       wUser.removeRole(muterole.id)
       message.reply(`${wUser.tag} has been unmuted.`)
     }, ms(mutetime))
   }

  message.delete().catch(O_o=>{});

  return message.channel.send("User has been **Warned**.");
}

module.exports.help = {
  name: "warn"
}
