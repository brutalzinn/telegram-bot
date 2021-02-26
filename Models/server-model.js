

 const PORT = process.env.PORT || 5050
 const DOCKER = process.env.DOCKER
 const HOST = process.env.HOST
 //const timeout = 1800000
 //const routineTimer = 300000
  const timeout = 1000
 const routineTimer = 2000
 const emailUser = process.env.EMAILUSER
 const emailPassword = process.env.EMAILPASSWORD
 const emailHost = process.env.EMAILHOST

module.exports = {
 Port : PORT,
 Host : HOST,
 routineTimer,
 timeout,
Docker : DOCKER,
emailUser : emailUser,
emailPasword : emailPassword,
emailHost : emailHost
      }