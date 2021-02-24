
const nodemailer = require('nodemailer')
const serverModel = require('./server-model')
var messages = []
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
function dobotLogger(msg){
messages.push(msg)
//console.log('recebi essa mensagem: ' +JSON.stringify(msg))
}
function sendMailFromBot(bot){
    console.log('called')
    var msg =''
    for(var i =0 ; i < messages.length; i++){
        msg += messages[i].text + '<br>'
    } 
     console.log(msg)
  //  sendEmail('<h3>Enviando do bot</h3><br>'+msg,'telegram bot sender',serverModel.emailUser,['robertocpaes@gmail.com'])
    const chatId = messages[0].chat.id;
   bot.sendMessage(chatId, 'Entendi sua mensagem');
 
}
module.exports = {
dobotLogger,
sendMailFromBot
      }
