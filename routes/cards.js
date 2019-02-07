const express = require('express');
//With Express I'll use the router constructor to create a new router.
const router = express.Router();
const { data } = require('../data/flashcardData.json');
//I've separated out the cards because the cards will be the main data we will want to use.
const { cards } = data;

//This will then serve the cards for the app.
//Prompt, hint are the names for variables we want the view to have access to when it's being rendered.
//I use a colon to tell express the treat this part of the URL as a variable or a route parameter named id.
router.get('/:id', (req, res) => {
	const { side } = req.query;
	const { id } = req.params;
	res.render('card', {
		//The value for the route parameter from the URL will be stored in the request object params property.
		//I use the ID parameter to access the elements in the card's array.
		prompt: cards[req.params.id].question, 
		hint: cards[req.params.id].hint});
});

module.exports = router;