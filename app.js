/*The module is called Express and it is the parameter that I pass into the require function. 
  I can use the variable express to access all the methods and properties of the Express module.
*/
const express = require('express');

//The express function returns an Express application.
const app = express();

//Using the app.set method to set the view engine, To the parameter pug.
//This line, just tells Express which template engine to use.
app.set('view engine', 'pug');

//To create a route, I used the get method on the app object.
//The get method is used to handle the get requests to a certain URL.
app.get('/', (request, response) => {
	response.send('Flashcards');
});

//Setup the development server using the listen method. 
//I give this parameter which is the port number 3000.
app.listen(3000, () => {
	console.log("The application is working on localhost:3000");
});