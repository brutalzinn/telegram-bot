const messageModel = require('./mail-model');
const user = require('./user-model');

function resolve(userResponse){
  
//console.log('resolve called' + userResponse)
user.addUser(userResponse.from.id,userResponse.text)
user.setuserInfo(userResponse.from.id,userResponse)  
console.log('registring ' + userResponse.from.id)
//messageModel.priorityList()
}
function handleMessage(firstmessage, bot,msg){
    const chatId = msg.chat.id;
  if(firstmessage){
              bot.sendMessage(chatId, 'Bem-vindo, como você se chama?').then(response => {
              bot.onText(/.*/, (userResponse) => {
            resolve(userResponse);
            bot.sendMessage(chatId,'Oá,' + userResponse.text + '. É um prazer conhecê-lo.').then( response =>{
            bot.sendMessage(chatId,'Atenção, ' + userResponse.text + '.' +' Estou encaminhando suas mensagens para o Roberto.')
            })
            bot.removeTextListener(/.*/)
            bot.onText(/.*/, (messageEncaminhada) => {
              console.log(messageEncaminhada.from.id)
                user.mountMessage(messageEncaminhada.from.id,messageEncaminhada.text,messageEncaminhada.date)
            })
            
            });
        })
      }
}






module.exports = {
    handleMessage,
 }
    