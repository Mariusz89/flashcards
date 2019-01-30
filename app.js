/*The module is called Express and it is the parameter that I pass into the require function. 
  I can use the variable express to access all the methods and properties of the Express module.
*/
const express = require('express');

//The express function returns an Express application.
const app = express();

//To create a route, I used the get method on the app object.
//The get method is used to handle the get requests to a certain URL.
app.get('/', (request, response) => {
	response.send('Flashcards');
});

//Setup the development server using the listen method. 
//I give this one parameter which is the port number 3000.
app.listen(3000);