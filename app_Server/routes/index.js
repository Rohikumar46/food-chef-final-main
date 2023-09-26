var express = require('express');
var router = express.Router();
var ctrlothers = require('../controllers/others');
require('dotenv').config();
router.get('/login',ctrlothers.login);
router.get('/contact',ctrlothers.contact);
router.get('/signup',ctrlothers.signup);
router.get('/about',ctrlothers.about);
router.get('/recipes',ctrlothers.recipes);
router.get('/chickentikkamasala',ctrlothers.chickentikkamasala);
router.get('/chickenbiryani',ctrlothers.chickenbiryani);
router.get('/palakpaneer',ctrlothers.palakpaneer);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
