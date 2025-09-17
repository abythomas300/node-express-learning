const firstName = process.argv[2]
const lastName = process.argv[3]

if(firstName && lastName) {
    console.log(`Hello, ${firstName} ${lastName}`)
} else {
    console.log('Hello World')
}