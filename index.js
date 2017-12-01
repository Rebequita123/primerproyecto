'use strict'
var app=required('express')(),
    http= required('http').createServer(app),
    io=required('socket.io')(http),
    port=process.env.PORT || 3000,
    publicDir= `${__dirname}/public`
    http.listen(port,()=>{
    	console.log('Iniciando express y Socket.IO en localhost:%d', port)
    })
    app
       .get('/', (req, res) =>{
       	res.sendFile(`${publicDir}/client.html`)
       })
       .get('/streaming',(req,res)=>{
       	res.sendFile(`${publicDir}/server.html`)
       })