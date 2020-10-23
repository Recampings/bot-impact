const embeds = require('./embeds.js')
const Discord = require('discord.js');
const random = require('random');
const bot = new Discord.Client();
const fs = require('fs');
const jsonfile = require('jsonfile');
let xpToNextLevel = 0
var stats = {}
if (fs.existsSync('stats.json')) {
    stats = jsonfile.readFileSync('stats.json')
}

bot.on('guildMemberAdd', member => {
    member.setRoles([766796745174024193]);
});

bot.on('message', (message) => {

    if (message.author.id == bot.user.id || message.author.bot)
        return

    if (message.guild.id in stats == false) {
        stats[message.guild.id] = {}
    }

    const guildStats = stats[message.guild.id]
    if (message.author.id in guildStats == false) {
        guildStats[message.author.id] = {
            xp: 0,
            level: 0,
            last_message: 0
        }
    }

    const userStats = guildStats[message.author.id]
    if (Date.now() - userStats.last_message >= 60000) {
    const userStats = guildStats[message.author.id]
    userStats.xp += random.int(25,35)
    userStats.last_message = Date.now()


    xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100
    if (userStats.xp >= xpToNextLevel) {
        userStats.level++
        userStats.xp = userStats.xp - xpToNextLevel
        message.channel.send(message.author.username + ' is now level ' + userStats.level + '!')
        xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100
    }

    jsonfile.writeFileSync('stats.json', stats)

    console.log(message.author.username + ' now has ' + userStats.xp)
    console.log(xpToNextLevel + ' XP needed to level up.')
}

    const parts = message.content.split(' ')
    if (parts[0] == '-help') {
        message.channel.send(embeds.helpEmbed)
    }
    else if (parts[0] == '-level') {
        const viewLevelEmbed = new Discord.MessageEmbed()
        .setColor('#700d0d')
        .setTitle(message.author.username + ' is level ' + userStats.level)
        .setDescription(userStats.xp + '/' + xpToNextLevel + ' XP')
        .setThumbnail(message.author.avatarURL())
        .setFooter('Impact Bot');

        message.channel.send(viewLevelEmbed)
    }
    else if (parts[0] == '-leaderboard') {
        message.channel.send('This command is still a work in progress')
    }
})

bot.login('NzY3ODk3NzAxOTQ5MTEyMzUx.X44mdg.czKYli5yDyXGx3TFu3iLyfNJ5zI');
