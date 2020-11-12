const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)



const createMessagingService = () => {

}

const getMessagingService = () => {

}

const removeMessagingService = () => {

}

module.exports = {
    createMessagingService: createMessagingService,
    getMessagingService: getMessagingService,
    removeMessagingService: removeMessagingService
}