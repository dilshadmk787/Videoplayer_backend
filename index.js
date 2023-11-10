//import json library in index.js
const jsonServer = require('json-server')
//create server using json library
const mediaPlayerServer = jsonServer.create()
//create a path to db.json
const router = jsonServer.router('db.json')
//set middleware to convert js to json
const middleware = jsonServer.defaults()
//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for server
const port= 5007 || process.env.PORT

//monitor 4000
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player Server is running on ${port} and waiting for request`)
})
