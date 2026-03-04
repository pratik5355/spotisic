const express = require('express');
const router = express.Router();
const { getSongs, getSongById, incrementPlay } = require('../controllers/songController');

router.route('/').get(getSongs);
router.route('/:id').get(getSongById);
router.route('/:id/play').post(incrementPlay);

module.exports = router;
