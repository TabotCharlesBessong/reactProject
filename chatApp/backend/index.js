
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const port = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const router = require('./router')

io.on('connection',(socket)=>{
  console.log('we have a connection!!!');

  socket.on('join',({name,room})=>{
    console.log(name,room);
  })

  socket.on('disconnect',() => {
    console.log('User just left!!');
  })
})

app.use(router)

server.listen(port,()=>{
  console.log(`server is running on port ${port} `);
})