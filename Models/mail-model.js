
const user = require('./user-model');
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

var messages = []
async function sendEmail(html,subject,from,arrayemails){

const mailSent = await transporter.sendMail({
html: html,
subject: subject + ' ' + serverModel.emailUser,
from: from +' ' + serverModel.emailUser,
to: arrayemails
})
console.log(mailSent)

}

function dobotLogger(msg){
messages.push(msg)
//console.log('recebi essa mensagem: ' +JSON.stringify(msg))
}
function sendMailFromBot(userid,msgreceived,date){
    console.log('called to ' + userid)

   messages.push({userid,msgreceived,date})   

  var index = user.getuserInfo(userid)

  user.user[index].messagelist = JSON.stringify(messages)

}
//var actualmessageindex = messages.length -1
//checkAlive(messages[actualmessageindex])

module.exports = {
dobotLogger,
sendMailFromBot,

      }
