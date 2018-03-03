const config = require("./config.json"),
    Discord = require("discord.js"),
    bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot logged in");
})
;

bot.on("message", message => {
    // Do stuff
    if (message.content.startsWith(config.prefix)) {
    // Commands
});

bot.login(config.token);
