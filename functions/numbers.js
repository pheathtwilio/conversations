const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)


const getNumber = new Promise((resolve, reject) => {
    client.availablePhoneNumbers('US')
        .local
        .list({limit: 1})
        .then((local) => {
            resolve(local)
        })
        .catch((e) => {
            reject(e)
        })
})

getNumber.then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

module.exports = {
    getNumber: getNumber
}