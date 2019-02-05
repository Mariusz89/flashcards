/*The module is called Express and it is the parameter that I pass into the require function. 
  I can use the variable express to access all the methods and properties of the Express module.
*/
const express = require('express');
//Body-parser contains several parses, the different ways the clients can send data.
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//The express function returns an Express application.
const app = express();

/*HTML forms normally encode the data they send the same way URLs do.
  So, I'll need to use the urlencode parser.
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Using the app.set method to set the view engine, To the parameter pug.
//This line, just tells Express which template engine to use.
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards')

app.use(mainRoutes);
//Add a path as a first argument to mount those routes to.
//I'll refer to these routes as the cardRoutes variable.
app.use('/card', cardRoutes);

app.use((req, res, next) => {
	console.log("Hello");
	//Creating a custom error object and storing it in variable err.
	const err = new Error('Not found');
	//Send a 500 status for own download error.
	err.status = 404;
	//Pass in the error object as an argument to the next function call.
	next(err);
});

//Error middleware
app.use((err, req, res, next) => {
	//Let's use the alternative way to set locals that you learnt about earlier.
	res.locals.error = err;
	//In the error handler let's read the status property I just set.
	res.status(err.status);
	//Pass error object as the second argument to the render function.
	//This will give the template access to the error data.
	res.render('error', err);
});

//Setup the development server using the listen method. 
//I give this parameter which is the port number 3000.
app.listen(3000, () => {
	console.log("The application is working on localhost:3000");
});