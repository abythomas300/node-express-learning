// - - - CREATING A SERVER - - - 

// import http module 
const http = require('http') // http module contains necessary classes and functions to create a server

// setting up port and hostname
const hostname = '127.0.0.1'; // address of server
const port = 3000; // port where server application will run

// creating server using http the module
const server = http.createServer(function(req, res){
    // functions to be done by the created server
    res.statusCode = 200; // giving OK status to the client server
    res.setHeader('Content-Type','text/plain'); // telling the server that the payload is a plain text
    res.end('Hello, this is a server created by Aby Thomas.'); // actual payload, end of response
})

// making the server to listen for requests
server.listen(port, hostname, function(){
    console.log(`Server is running at http://${hostname}:${port}`); // printing out the link to access the listening(active) server
    console.log('Clicking on the link will send a request to the created server.')
})