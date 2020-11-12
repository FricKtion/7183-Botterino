module.exports = (client, message) => {
    console.log(`Logged in as: ${client.user.tag}`);
    
    var statusType = client.config.statusType;
    var statusMessage = client.config.statusMessage;
    var statusUrl = client.config.statusUrl;

    client.user.setPresence(
        { 
            status: 'online',
            game: 
            { 
                type: statusType, 
                name: statusMessage,
                url: statusUrl
            }
        }
    )
    .then(console.log)
    .catch(console.error);
};