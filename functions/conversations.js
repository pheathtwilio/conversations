exports.handler = function(context, event, callback) {

    const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const messaging = require('./messagingService')

        client.conversations.conversations
            .create({
                messagingServiceSid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                friendlyName: 'Friendly Conversation'
            })
            .then(conversation => console.log(conversation.sid));



    callback(null, twiml);
};