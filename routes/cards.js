const express = require('express');
//With Express I'll use the router constructor to create a new router.
const router = express.Router();
const { data } = require('../data/flashcardData.json');
//I've separated out the cards because the cards will be the main data we will want to use.
const { cards } = data;

router.get('/', (req, res) => {
	//Total number of cards we have to choose from.
	const lengthCards = cards.length;
	//Generated a random card using math.random.
	const randomCards = Math.floor( Math.random() * lengthCards);
	//Plug that number into the URL and it's used to move to a different page.
	res.redirect(`/cards/${randomCards}?side=question`);
});

//This will then serve the cards for the app.
//Prompt, hint are the names for variables we want the view to have access to when it's being rendered.
//I use a colon to tell express the treat this part of the URL as a variable or a route parameter named id.
router.get('/:id', (req, res) => {
	//The value for the route parameter from the URL will be stored in the request object params property.
	const { side } = req.query;
	//I use the ID parameter to access the elements in the card's array.
	const { id } = req.params;

	//If site doesn't exist, I redirect to the same card,
	if (!side) {
		return res.redirect(`/cards/${id}?side=question`);
	};

	const text = cards[id][side];
	const { hint } = cards[id];
	//Wrap the text and the hint into an object that I can pass into the template.
	const templateData = { text, hint, side, id };
	res.render('card', templateData);
});

module.exports = router;

