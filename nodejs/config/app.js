console.log("Hello Borisz");  
const io = require('socket.io')(3000,{
  cors: {
    origin: "*",
  },
})


io.on('connection', socket => {

socket.emit('welcome', 'kukac')

})
