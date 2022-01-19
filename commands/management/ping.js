const Discord = require('discord.js');
const packageJSON = require("../../package.json");
const fs = require('fs');

module.exports = {
    name: "ping",
    description: "Sends the bots ping",
    execute(message, client) {
        message.channel.send('**The Ping-inator!**\nPinging...').then((msg) => {
            ping = msg.createdTimestamp - message.createdTimestamp;
            api = Math.round(client.ws.ping)

            discordJSVersion = packageJSON.dependencies["discord.js"];
            const pingembed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setTitle(`🏓 Pong!`)
                .addFields({ name: '**Latency**', value: `${ping}ms`, inline: true }, { name: `** API ** `, value: `${api}ms`, inline: true }, { name: `** Discord.js Version ** `, value: `${discordJSVersion}`, inline: true }, )
                .setTimestamp();
            message.channel.send({
                embeds: [pingembed]
            });
            msg.delete();
        });
    }
}