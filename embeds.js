const index = require('./index.js')
const Discord = require('discord.js');

const helpEmbed = new Discord.MessageEmbed()
	.setColor('#700d0d')
	.setTitle('Help')
	.setDescription('Commands')
	.setThumbnail('https://lh3.googleusercontent.com/_31L0OS5RNKMGmXiW0bpxzFnbzEo0KIHZ2TDLMhVrORINdlVSmukp4lMah-cX24uCId1dDvGwno0TNgFCqudr0BSazxZ_BDPC_EZwAX35WUiKcI4HSzx55mjiKb0mCjKVKgNVOb37jfCQZIC_qaw9bL7ACHoFyTsF3U0rhVGHFqbss2sG4J6mosb8kTZQ-NQirDRKe_nRUNUD2nf53XxvWCZHCSjSUo254KM7V_rV3c2CRrJB4wIB9yvBw5xEcTNlugB4dNZ9FUbwW3FkXDF0BO9XdhSpr9O6hhDGSuLycoeNSbm39LGM57eBfaYC-p-uQkjcCvI_xPkzRwZFm8GKPW1K-leD7xR-Qov1nm1iZZHx58He37cjiPFpmZqU8Hm29HnoeD3f_pcKHouSc9ch-ouNbCcx9-KBPTVbFkBoR1XHmtTabtjUsAOXCcqT7bM58HgZxqcuzQZxeD5LsEf-OcnRlh55CueCFNQJIaQquxZ4cdWtEmMq5EzKFZTbhU1ERfbsEeSfGgZcENIWTsAfSDIiiLDk2jnx68E1P-uZx-gnAGBVxmZRe4Rq6-bf4rjzEGgzrhnPqc5gpXmQGVfPXVVSxeqJ0C27pHeeN3d9ZcU-QqCC1JqzTI-Ss2OmvPUKzzhIYaHVsACGz3tcEWx7Bi-vkWwEq6v3XyXCtP4HVufYsd5DI9ZsG5TO0w=s512-no?authuser=0')
	.addFields(
        { name: '-help', value: 'Lists all commands' },
        { name: '-level', value: 'Displays user level' },
        { name: '-leaderboard', value: 'Displays highest level players on the server (WIP))' },
	)
    .setFooter('Impact Bot');

module.exports = {helpEmbed};