const express = require('express');
const router = express.Router();
const { getArtists, getArtistById } = require('../controllers/artistController');

router.route('/').get(getArtists);
router.route('/:id').get(getArtistById);

module.exports = router;
