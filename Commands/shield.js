module.exports = {
  name: "shield",
  description: "Turn on/off wall check operations",
  checkArgs: true,
  type: "discord",
  category: "admin",
  usesChat: false,
  sendEmbed: true,
  usesShield: false,
  adminPerms: true,
  execute(bot, database, arguments, options, embed, message) {
    embed.setTitle("Shield | " + options.serverIP);
    if (arguments == "on") {
      if (database.isShieldOn()) {
        embed.setColor("#f8c300").setDescription("Shield is already on")
        return;
      }
      embed
        .setColor("#00d166")
        .setDescription(
          "Shield is enabled, all wall check operations are halted"
        );
    } else if (arguments == "off") {
      if (!database.isShieldOn()) {
        embed.setColor("#f8c300").setDescription("Shield is already off")
        return;
      }
      embed.setColor("#fd0061").setDescription(
        "Shield is disabled, all wall check operations are resumed"
      );
    }
    database.toggleShield();
  },
};
