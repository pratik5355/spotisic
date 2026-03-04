const express = require('express');
const router = express.Router();
const { getLikedSongs, toggleLikeSong } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/liked-songs').get(protect, getLikedSongs);
router.route('/like/:songId').post(protect, toggleLikeSong);

module.exports = router;
