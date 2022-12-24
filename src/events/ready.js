const {ActivityType, Events} = require("discord.js")

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity("Uptempo", {
            type: ActivityType.Listening
        })
        client.user.setStatus('idle')
        console.log(`Logged in as ${client.user.tag}!`);
    }
};
