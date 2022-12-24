const {Events, EmbedBuilder} = require("discord.js")
const welcomeChannel = "1055195701446979705"

module.exports = {
    name: Events.GuildMemberAdd,
    once: true,
    execute(client, member) {
        console.log(`${member} joined!`)
        const channel = client.channels.cache.get(welcomeChannel)
        channel.send(`WELCOME ${member} TO THE **UPTEMPO UNITED** COMMUNITY! 🎉`)
    }
};
