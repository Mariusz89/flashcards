const express = require('express');
//With Express I'll use the router constructor to create a new router.
const router = express.Router();


//This will then serve the cards for the app.
//prompt,  hint are the names for variables we want the view to have access to when it's being rendered.
router.get('/', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant´s tomb?", hint: "Think about whose tomb it is"});
});

module.exports = router;