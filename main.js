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
        var command = message.content.split(" ")[0].substring(config.prefix.length);

        switch (command) {
            case "ping":
                message.channel.send("Pong!");
                break;
            default:
                message.channel.send("Command not found!");
                break;
        }
    }
});

bot.login(config.token);
