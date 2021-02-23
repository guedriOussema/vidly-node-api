const express = require('express');
const genres = require('./genres');
const customers = require('./customers');
const movies = require('./movies');
const rentals = require('./rentals');
const users = require('./users');
const auth = require('./auth');

const router = express.Router();


router.use('/api/genres', genres);
router.use('/api/customers', customers);
router.use('/api/movies', movies);
router.use('/api/rentals', rentals);
router.use('/api/users', users);
router.use('/api/auth', auth);

module.exports = router;
