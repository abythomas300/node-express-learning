const express = require('express')
const app = express()

const port = 3000

app.get('/', function(req,res){
    res.send('You have reached the homepage.')
})
app.get('/feedback', function(req, res){
    res.send('You have reached the feedback page')
})
app.get('/about',function(req,res){
    res.send('You have reached the about page')
})
app.get('/profile',function(req,res){
    res.send('You have reached the profile page')
})
app.get('/submissions',function(req,res){
    res.send('You have reached the submissions page')
})
app.get('/registration',function(req,res){
    res.send('You have reached the registration page')
})

app.listen(port, function(){
    console.log(`Server is listening for incoming requests at port ${port}`)
    console.log('Available links:')
    console.log(`For feedback click here --> http://localhost:${port}/feedback`)
    console.log(`For about click here --> http://localhost:${port}/about`)
    console.log(`For profile click here --> http://localhost:${port}/profile`)
    console.log(`For submissions click here --> http://localhost:${port}/submissions`)
    console.log(`For registration click here --> http://localhost:${port}/registration`)
    console.log(`For homepage click here --> http://localhost:${port}/`)
})