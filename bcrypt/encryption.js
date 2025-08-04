const bcrypt = require('bcrypt')

const myPassword = 'secretpassword123'


bcrypt.hash(myPassword, 10)  // .hash() is an asynchronous function
    .then(function(hash){
        generatedHash = hash
        console.log("Hashing Successfull")
        console.log("Hashed String:", hash)
    })
    .catch(function(error){
        console.log("Hashing Failed")
        console.log("Reason:", error)
    })
    .finally(function(){
        console.log("- - Encryption Process Ended- - ")
    })

