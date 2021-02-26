
const nodemailer = require('nodemailer')
const serverModel = require('./server-model')
let transporter = nodemailer.createTransport({

    name: serverModel.emailUser,
    host: serverModel.emailHost,
    port: 465,
    secure: true,
    service:serverModel.emailHost,
    auth: {
        user:serverModel.emailUser,
        pass:serverModel.emailPasword
    }
},
)


async function sendEmail(html,subject,from,arrayemails){

const mailSent = await transporter.sendMail({
html: html,
subject: subject + ' ' + serverModel.emailUser,
from: from +' ' + serverModel.emailUser,
to: arrayemails
})
console.log(mailSent)

}


//var actualmessageindex = messages.length -1
//checkAlive(messages[actualmessageindex])

module.exports = {
sendEmail

      }
