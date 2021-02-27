
const mailModel = require('./mail-model');
const serverModel = require('./server-model');

var user = []
var messages = []
function diff_hours(dt2, dt1) 
 {
  var diff = new Date(dt2.getTime() - dt1.getTime()); 
  return Math.abs(diff);
 }
 function getTimeSpan(ticks) {
    var d = new Date(ticks * 1000)
    newDate = new Date(d.valueOf() - d.getTimezoneOffset() * 60)
    return {
        day: ("0" + (newDate.getDate())).slice(-2),
        month: ("0" + (newDate.getMonth() + 1)).slice(-2),
        year: ("0" + (d.getFullYear() )).slice(-2),

        hour: ("0" + (d.getHours())).slice(-2),
        minute: ("0" + (d.getMinutes() )).slice(-2),
        second: ("0" + (d.getSeconds() )).slice(-2)
    }
}
function checkAlive(msgatual){

    var messagedate = new Date(msgatual.date * 1000)
var teste = diff_hours(new Date(),messagedate)
 if(teste > serverModel.timeout){
     console.log('Timeout executado')
     return false
 }else{
     return true
 }
    }
function addUser(id,usercaption){
    user.push({id,usercaption})
    }
    function setuserInfo(userinfo,info){
    var indexid = user.findIndex((item => item.id == userinfo))
    //console.log(indexid)
    //console.log("antes de atualizar: ", user[indexid])
    user[indexid].info = info
    //console.log("depois de atualizar: ", user[indexid])
    }
    function getuserInfo(userinfo){
    
        var indexid = user.findIndex((item => item.id == userinfo)) 
    
     return indexid
    }
function mailComposer(id,messages){
    var message = ''
    messages.forEach(item =>{
        var time = getTimeSpan(item.date) 
 message += `${item.msgreceived} - ${time.day}/${time.month}/${time.year} - ${time.hour}: ${time.minute} : ${time.second}<br>`
    })

    if(user.length > 0){
  mailModel.sendEmail(message,'Email for' + id,serverModel.emailUser,['robertocpaes@hotmail.com'] )
    }
}
    function priorityList(){
        let timerId = setInterval(() => {
            user.forEach(item => {
if(item.messagelist){
        var actualmessageindex = JSON.parse(item.messagelist).length - 1
if(!checkAlive(JSON.parse(item.messagelist)[actualmessageindex])){
    //mailComposer(item.id,JSON.parse(item.messagelist))
}
}    
})
},serverModel.routineTimer)
    }
    function mountMessage(userid,msgreceived,date){
        console.log('called to ' + userid)
    
       messages.push({msgreceived,date})   
    
      var index = getuserInfo(userid)
    
      user[index].messagelist = JSON.stringify(messages)
    
    }
module.exports = {
addUser,
setuserInfo,
getuserInfo,
mountMessage,
priorityList,
    user
}