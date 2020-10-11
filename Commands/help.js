const bold = "**";
const underline = "__";
module.exports = {
  name: "help",
  description: "Show different categories of help commands",
  checkArgs: false,
  type: "discord",
  category: "help",
  usesChat: false,
  sendEmbed: true,
  usesShield: false,
  adminPerms: false,
  execute(bot, database, arguments, options, embed, message, clientCommands) {
    let helpCommands = "";
    for (eachCommand of clientCommands) {
      if (eachCommand[1].category === "help") {
        helpCommands +=
          bold + options.prefix + eachCommand[1].name + bold + " - ";
        helpCommands +=
          underline + eachCommand[1].description + underline + "\n";
      }
    }
    embed
      .setColor("#00c09a")
      .setTitle("Help Commands:")
      .setDescription(helpCommands);
  },
};
