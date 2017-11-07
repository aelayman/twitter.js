const express = require( 'express' );
const app = express(); // creates an instance of an express application
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
const routes = require('./routes');
app.use('/', routes);



const nunjucks = require('nunjucks');
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


app.use(express.static("public"));

app.use((req, res, next) => {
    console.log('METHOD: ', req.method)
    console.log('URI', req.path)
    next()
  })  

app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })