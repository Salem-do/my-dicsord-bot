const { Client, GatewayIntentBits } = require('discord.js');

// This creates the bot client
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages
    ] 
});

// This runs when the bot successfully connects
client.once('ready', () => {
    console.log(`Success! Logged in as ${client.user.tag}`);
});

// This uses the "Secret Variable" we will set up in Railway
client.login(process.env.DISCORD_TOKEN);
