const express = require('express')
const app = express()

const port = 3000

const greetingRoutes = require('./routes/greetingRoutes')

// middleware functions
app.use('/greetings', greetingRoutes)  // 'greetingsRoutes' plug in


// Route Handler 
app.get('/', function(req, res){
    res.send('Welcome To The Homepage..')
})





app.listen(port, function(){
    console.log(`Sever is listening at http://localhost:${port}`)
    console.log(`Links you can try on:`)
    console.log(`https://localhost:${port}/greetings`)
    console.log(`https://localhost:${port}/greetings/formal`)
    console.log(`https://localhost:${port}/greetings/Alex`)
    console.log(`https://localhost:${port}/greetings/Rachel`)
})



