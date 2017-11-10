import builder = require("botbuilder");
import restify = require("restify");

var port = process.env.PORT || process.env.port || 8888;

var server = restify.createServer();
server.listen(port, () => {
    console.log(`${server.name} listening to ${server.url}`);
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post("/api/messages", connector.listen());

var bot = new builder.UniversalBot(connector);

bot.dialog("test", (session, args) => {
    //TODO
});