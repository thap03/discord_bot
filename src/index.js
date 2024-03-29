// acquire the token from a different file
require("dotenv").config();

// destructuring - importing a set amount of things from a package
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({

    // intents - set of permissions that the bot can use in order to gain access to a set of events
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

// console log a customized message so it tells us that the bot is ready
client.on("ready", (c) => {
    console.log(` ${c.user.tag} is online!`);
})

// have the bot reply back to you when you send certain keywords
/*client.on("messageCreate", (message) => {
    const content = message.content.toLowerCase();

    if (message.author.bot) {
        return;
    }

    if (content.includes("toby")) {
        message.reply("My father.");
    }

    if (content.includes("sam")) {
        message.reply("My mother.");
    }

    if (content.includes("ethan")) {
        message.reply("YURRRRR");
    }

    if (content.includes("matt")) {
        message.reply("THE GOAT HIMSELF.");
    }

    if (content.includes("sebs")) {
        message.reply("MANDOOOOOOOOOO");
    }
})
*/

// logs into the bot to make it go online
client.login(process.env.TOKEN);

