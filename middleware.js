const express = require('express')
const app = express()

const port = 3000

// middleware 1 - to print request method
const requestLogger = function(req, res, next){
    console.log(`Request method-->`, req.method)
    next()
}

// middleware 2 - to print request date and time
const dateLogger = function(req, res, next){
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    console.log(`Request made date --> ${year}-${month}-${day}`)
    next()
}

// middleware 3 - to print request time
const timeLogger = function(req, res, next){
    const time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    console.log(`Request made time -->${hours}:${minutes}:${seconds}`)
    next()
}


app.use(requestLogger)
app.use(dateLogger)
app.use(timeLogger)

// route handler 1
app.get('/', function(req, res){
    res.send('Hello, I am a server.')
})

app.listen(port, function(){
    console.log(`This server is running at http://localhost:${port}/`)
})