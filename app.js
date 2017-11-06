const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use((req, res, next) => {
    console.log('METHOD: ', req.method)
    console.log('URI', req.path)
    next()
  })

app.get('/', (req, res) => res.send('Hello World!'))







app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })