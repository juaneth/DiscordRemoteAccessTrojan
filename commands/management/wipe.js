const fs = require("fs");
module.exports = {
    name: "wipe",
    description: "Wipes log.txt",
    execute(message, client, args, Discord) {
        const directory = "./log.txt";

        if ((message.author.id == "910968511273263104", "418876976963649536")) {
            fs.writeFileSync(directory, ``);
        }

        let log = fs.readFileSync(directory);

        const wipedembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`💻 \`log.txt\` Wiped!`)
            .setTimestamp();

        message.channel.send({
            embeds: [wipedembed],
        });
    },
};