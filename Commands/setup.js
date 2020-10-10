module.exports = {
  name: "setup",
  description: "Create all the channels",
  checkArgs: false,
  type: "discord",
  usesChat: false,
  sendEmbed: true,
  usesShield: false,
  execute(bot, database, arguments, options, embed, message) {
    if (message.guild.channels.cache.find((ch) => ch.name === "Bot")) {
      database.toggleChannel(true);
      embed.setColor("#cc7900").setTitle("⚠️ Channels already setup ⚠️");
      return;
    }
    let categoryID = "";
    let channelsCreated = "";
    message.guild.channels
      .create("Bot", {
        type: "category",
      })
      .then((category) => {
        categoryID = category.id;
        channelsCreated += "✔️ Bot Category Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("serverchat", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ Serverchat Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("ftop", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ Factions Top Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("flist", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ Factions List Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("wallchecks", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ WallChecks Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("weewoo", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ Weewoo Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });

    message.guild.channels
      .create("verify", {
        type: "text",
      })
      .then((channel) => {
        channel.setParent(categoryID);
        channelsCreated += "✔️ Verify Channel Created\n";
      })
      .catch((err) => {
        embed.setDescription(err + "\n");
        console.log(err);
      });
    embed.setDescription(channelsCreated);
    database.toggleChannel(true);
    embed.setColor("#cc7900").setTitle("Channel Setups");
  },
};
