const dotenv = require("dotenv");
const { Client, GatewayIntentBits, ActivityType, Presence } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  // Logs if bot is online!
  console.log(`Logged in as ${client.user.tag}!`);

  //Changes the activity
  client.user.setActivity("Uptempo", {
    type: ActivityType.Listening
  })
  //Set to idle
  client.user.setStatus('idle')


});


client.login(dotenv.config().parsed.TOKEN);