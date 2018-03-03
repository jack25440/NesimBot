const config = require("./config.json"),
    Discord = require("discord.js"),
    bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot logged in");
});

bot.login(config.token);
