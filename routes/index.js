const express = require('express');
const router = express.Router();


//To create a route, I used the get method on the app object.
//The get method is used to handle the get requests to a certain URL.
app.get('/', (req, res) => {
	const name = req.cookies.username;
	//I made an if statement checking the value of name.
	//If it exists, we want to render the index template, otherwise redirect to the hello route.
	if (name) {
		res.render('index', {name});
	} else {
		res.redirect('/hello');
	}
});

//Rendering the hello template.
app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	//Redirect the user to the index page if the cookies username value is set. 
	//Otherwise, we went to render the hello form.
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

app.post('/hello', (req, res) => {
	//This will send a cookie to the browser after we submit the form.
	res.cookie('username', req.body.username);
	res.redirect('/');
});

//Clear the cookie in the new route, then redirect the user to the hello form.
app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

//This will then serve the cards for the app.
//prompt,  hint are the names for variables we want the view to have access to when it's being rendered.
app.get('/card', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant´s tomb?", hint: "Think about whose tomb it is"});
});