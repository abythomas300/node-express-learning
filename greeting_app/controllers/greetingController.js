function normalGreeting(req, res){
    res.send('Hello')
}

function formalGreeting(req, res){
    res.send('I hereby welcome you to this webpage.')
}

function userGreeting(req, res){
    const name = req.params.name
    console.log("User's name", name)
    res.send(`Hello ${name}, how are you`)
}

module.exports = {
    normalGreeting,
    formalGreeting,
    userGreeting
}