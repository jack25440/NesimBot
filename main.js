const config = require("./config.json"),
    Discord = require("discord.js"),
    bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Bot logged in");
    bot.user.setPresence({ game: {name: "with Dead People" } });
})
;

bot.on("message", message => {

    if(message.author.bot) return;

    if(message.content.indexOf(config.prefix) !== 0) return;

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

        // switch (command) {
        //     case "mote":
        //         message.channel.send(":`:", ,":`:");
        //         break;
        //     default:
        //         message.channel.send("Command not found!");
        //         break;
        //     }
    }
});

bot.login(config.token);
