const bcrypt = require('bcrypt')
const hashedString = '$2b$10$zKcKdTgDY3jeKQZTWbFvx.BOfZ/wl26AnI.eIQ7c3Tsvcg6KCTUbO'
const loginPassword = 'secretpassword123'

bcrypt.compare(loginPassword, hashedString)  // .compare() is an asynchronous function
    .then(function(result){                 // 'result' is boolean
        if(result) {
            console.log("passwords match!")
        }
    })
    .catch(function(error){
        console.log("Wrong Password, reason: ", error)
    })
    .finally(function(error){
        console.log("- - Password Comparison Process Ended- - ")
    })