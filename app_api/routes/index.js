var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/foodiechef');
var ctrlReviews = require('../controllers/reviews');

router.get('/foodiechef', ctrlLocations.foodiechefListByDistance);
router.post('/foodiechef', ctrlLocations.foodiechefCreate);
router.get('/foodiechef/:foodiechefid', ctrlLocations.foodiechefReadOne);
router.put('/foodiechef/:foodiechefid', ctrlLocations.foodiechefUpdateOne);
router.delete('/foodiechef/:foodiechefid', ctrlLocations.foodiechefDeleteOne);

// Reviews
router.post('/foodiechef/:foodiechefid/reviews', ctrlReviews.reviewsCreate);
router.get('/foodiechef/:foodiechefid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/foodiechef/:foodiechefid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/foodiechef/:foodiechefid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
