const fs = require('fs')

// - - FILE READING - - 
// synchronous style
// const data = fs.readFileSync('equation.txt', 'utf-8')
// console.log("DATA INSIDE THE FILE: ", data)

// asynchronous style
// fs.readFile('equation.txt', 'utf-8', function(error, data){
//     if(error) {
//         console.log("CANNOT READ FILE, REASON: ", error)
//     } else {
//         console.log("DATA INSIDE THE FILE(ASYNCHRONOUS STYLE): ", data)
//     }
// })

// -- FILE WRITING --
// synchronous style
// const myData1 = "(a-b)^2 = a^2 - 2ab + b^2"
// fs.writeFileSync('equation2.txt', myData1)
// console.log("Data writted successfully!")

// asynchronous style
// const myData2 = "v = ut + 1/2at^2"
// fs.writeFile("equation3.txt", myData2, function(error){
//     if(error) {
//         console.log("WRITING FAILED, REASON: ", error)
//     } else {
//         console.log("Writing successfull")
//     }
// })


//-- UPDATING A FILE (APPENDING NEW DATA) --
// const dataToAppend = '\nThis is a mathematical equation'
// fs.appendFile('equation1.txt', dataToAppend, function(error){
//     if(error) {
//         console.log("UPDATE FAILED(APPEND), reason:  ", error)
//     } else {
//         console.log("UPDATE(APPEND) SUCCESSFUL!")
//     }
// })

// -- UPDATING A FILE (REWRITING ENTIRE FILE ) --
// const data = 'Aby Thomas'
// fs.writeFile('equation1.txt', data, function(error){
//     if(error) {
//         console.log("Write failed!")
//     } else {
//         console.log("Write successful!")
//     }
// })

// -- UPDATING A FILE (MODIFYING A SPECIFIC DATA) --
// eg: replacing king with queen
// fs.readFile('story.txt', 'utf-8', function(error, data) {
//     if(error){
//         console.log('Read opearation failed.')
//     } else {
//         console.log('Read operation success')

//         // replacing 
//         const newData = data.replace('king', 'queen')

//         fs.writeFile('story.txt', newData, function(error){
//             if(error){
//                 console.log('Write operation failed')
//             } else {
//                 console.log('Write operation success')
//             }
//         })
//     }
// })



// -- CHECKING WHETHER A FILE EXISTS -- 
// if(fs.existsSync('equation1.md')) {
//     console.log("File exists")
// } else {
//     console.log("File not found")
// }

// -- DELETING A FILE -- 
fs.unlink('waste_file.c', function(error){
    if(error){
        console.log("Delete opearation failed.")
    } else {
        console.log("Deletion success")
    }
})


// Desktop Location: C:/Users/mypc/Desktop/