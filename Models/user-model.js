var user = []
function diff_hours(dt2, dt1) 
 {

  var diff = new Date(dt2.getTime() - dt1.getTime()); 
  console.log('dt1.getTime(): ' + dt1.getTime())
  console.log('dt2.getTime(): ' + dt2.getTime())
  console.log('diff: ' + diff.getTime())
  return Math.abs(diff);
  
 }

function checkAlive(msgatual){

    var messagedate = new Date(msgatual.date * 1000)
var teste = diff_hours(new Date(),messagedate)
 if(teste > 60000){
     console.log('Timeout executado')
 }
    //var secondBetweenTwoDate = Math.abs((new Date().getTime()  - messagedate.getTime()) /1000);
  

    
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

    function priorityList(){
        let timerId = setInterval(() => {
      
            user.forEach(item => {
if(item.messagelist){
        var actualmessageindex = JSON.parse(item.messagelist).length - 1
        console.log('index:' + actualmessageindex)
checkAlive(JSON.parse(item.messagelist)[actualmessageindex])
}    
    })

        },1000)
        
      
    
    }
module.exports = {
addUser,
setuserInfo,
getuserInfo,
priorityList,
    user
}