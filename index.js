const dotenv = require("dotenv");
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Uptempo", {
    type: ActivityType.Listening
  })
});


client.login(dotenv.config().parsed.TOKEN);