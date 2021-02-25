
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
function checkAlive(msgatual){
var date = new Date().getMilliseconds() 
var messagedate = new Date(msgatual.date).getMilliseconds()
var secondBetweenTwoDate = Math.abs(date - messagedate);
console.log('msgTimestamp:' + messagedate)
console.log('msgComputer:' + date)
if(secondBetweenTwoDate < 3000){
    console.log('tempo limite passado')
}
console.log('result:' + secondBetweenTwoDate)
}
function sendMailFromBot(msgreceived,date){
    console.log('called')

   messages.push({msgreceived,date})   
   var actualmessageindex = messages.length -1
    checkAlive(messages[actualmessageindex])
  //  sendEmail('<h3>Enviando do bot</h3><br>'+msg,'telegram bot sender',serverModel.emailUser,['robertocpaes@gmail.com'])

  //   console.log(JSON.stringify(messages))

}
module.exports = {
dobotLogger,
sendMailFromBot
      }
