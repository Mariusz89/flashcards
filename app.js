/*The module is called Express and it is the parameter that I pass into the require function. 
  I can use the variable express to access all the methods and properties of the Express module.
*/
const express = require('express');
//Body-parser contains several parses, the different ways the clients can send data.
const bodyParser = require('body-parser');
//The express function returns an Express application.
const app = express();

/*HTML forms normally encode the data they send the same way URLs do.
  So, I'll need to use the urlencode parser.
*/
app.use(bodyParser.urlencoded({ extended: false }));

//Using the app.set method to set the view engine, To the parameter pug.
//This line, just tells Express which template engine to use.
app.set('view engine', 'pug');

//To create a route, I used the get method on the app object.
//The get method is used to handle the get requests to a certain URL.
app.get('/', (req, res) => {
	res.render('index');
});

//Rendering the hello template.
app.get('/hello', (req, res) => {
	res.render('hello');
});

app.post('/hello', (req, res) => {
	res.render('hello', {name: req.body.username});
});

//This will then serve the cards for the app.
//prompt,  hint are the names for variables we want the view to have access to when it's being rendered.
app.get('/card', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant´s tomb?", hint: "Think about whose tomb it is"});
});

//Setup the development server using the listen method. 
//I give this parameter which is the port number 3000.
app.listen(3000, () => {
	console.log("The application is working on localhost:3000");
});