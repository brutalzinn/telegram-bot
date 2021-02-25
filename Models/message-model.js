var user = []
function addUser(id,usercaption){
user.push({id,usercaption})
}
function setuserInfo(userinfo,info){
var indexid = user.findIndex((item => item.id == userinfo))
console.log(indexid)
console.log("Before update: ", user[indexid])
user[indexid].info = info
console.log("After update: ", user[indexid])
}
function getuserInfo(userinfo){
    var indexid = user.findIndex((item => item.id == userinfo))
 return user[indexid]
}
function resolve(userResponse){
console.log('resolve called' + userResponse)
addUser(userResponse.from.id,userResponse.text)
setuserInfo(userResponse.from.id,userResponse)  
}
function handleMessage(firstmessage, bot,msg){
    const chatId = msg.chat.id;
  if(firstmessage){
              bot.sendMessage(chatId, 'Bem-vindo, como você se chama?').then(response => {
              bot.onText(/.*/, (userResponse) => {
            resolve(userResponse);
            bot.sendMessage(chatId,'Oá,' + userResponse.text + '. É um prazer conhecê-lo.')
            bot.sendMessage(chatId,'Atenção, ' + userResponse.text + '.' +' Estou encaminhando suas mensagens para o Roberto.')
            bot.removeTextListener(/.*/)
            });
        })
  }
}






module.exports = {
    add : addUser,
    addInfo: setuserInfo,
    handleMessage
 }
    