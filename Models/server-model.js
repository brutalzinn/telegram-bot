

 const PORT = process.env.PORT || 5050
 const DOCKER = false
 const emailUser = ''
 const emailPassword = ''
 const emailHost = ''
function getHost(){
if(DOCKER){
     return '0.0.0.0'
}else{
     return '127.0.0.1'
}
}

module.exports = {
 Port : PORT,
 Host : getHost(),
Docker : DOCKER,
emailUser : emailUser,
emailPasword : emailPassword,
emailHost : emailHost
      }