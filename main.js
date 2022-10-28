//import packages
const { application } = require('express')
const express = require('express')
const morgan = require('morgan')

//configure out port
//check if it is set in the environment variable, if not then we default
// to 3000
const port  = process.env.PORT || 3000


console.info(`port = ${port}`)

const app = express()

//log all request 
app.use(morgan('common'))

console.info(`port = ${port}`)

//GET /
app.get('/', (req, resp)=>{
    //what is the media type
    //return HTML content
    resp.type('text/html')
    //set the status code
    resp.status(200)
    //send the response
    resp.send(`<h1>The current Timer is ${new Date()}</h1>
        <h3>How are you, Bro</h3>
        <button src="www.google.com">OK</button>

    `)

})


//start our web application
app.listen(port, ()=>{
    console.info(`Starting application on port ${port} at ${new Date()}`)
})