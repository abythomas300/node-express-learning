const express = require('express')
const app = express()

const port = 3000

app.get('/', function(req, res){
    res.send('Hello, I am a server created by Aby Thomas.')
})

app.listen(port, function(){
    console.log(`Sever is listening at http://localhost:${port}/`)
})