module.exports = (client, message) => {
    console.log(`Logged in as: ${client.user.tag}`);

    client.user.setPresence({
        status: "online",
        activity: {
            name: client.config.statusMessage
        }
    });
};