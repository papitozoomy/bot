const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
 
 
client.once('ready', () =>{
    console.log('Bot jest online!');
});
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'boop') {
  message.channel.send('Beep Szmato!');
    } else if (command === 'ping') {
  message.reply('Pong Kurwo!');
    } else if (command === 'test') {
        message.react('✅');
                message.channel.send('Zrobione!');
    }
});
 
 
client.login('ODg0ODI0NzU5MzU4MDkxMzQ0.YTeHRQ.N-ylOKhWJGLM-E0ARoiOMfAkbKM');