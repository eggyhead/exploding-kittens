const router = require('express').Router();
const gameAPI = require('./game');
const userAPI = require('./user');
const deckAPI = require('./deck');

router.use('/game', gameAPI);
router.use('/user', userAPI);
router.use('/deck', deckAPI);

module.exports = router;