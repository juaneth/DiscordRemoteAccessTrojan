const Discord = require('discord.js')

module.exports = {
    name: "ipv4",
    description: "Grabs the IPv4 Adress of the user",
    execute(message) {
        const https = require('https')
        const options = {
            hostname: 'api.ipify.org',
            port: 443,
            path: '/',
            method: 'GET'
        }

        const req = https.request(options, res => {
            res.on('data', ip => {
                const ipv4embed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`💻 IPv4 Adress!`)
                    .addFields({ name: '**IPv4 Adress**', value: `${ip}`, inline: true })
                    .setTimestamp();
                message.channel.send({
                    embeds: [ipv4embed]
                })
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    }
}