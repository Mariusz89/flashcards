const express = require('express');
//With Express I'll use the router constructor to create a new router.
const router = express.Router();


//To create a route, I used the get method on the app object.
//The get method is used to handle the get requests to a certain URL.
router.get('/', (req, res) => {
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
router.get('/hello', (req, res) => {
	const name = req.cookies.username;
	//Redirect the user to the index page if the cookies username value is set. 
	//Otherwise, we went to render the hello form.
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

router.post('/hello', (req, res) => {
	//This will send a cookie to the browser after we submit the form.
	res.cookie('username', req.body.username);
	res.redirect('/');
});

//Clear the cookie in the new route, then redirect the user to the hello form.
router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

//Export this router so I can reference it in the app JS file.
module.exports = router;