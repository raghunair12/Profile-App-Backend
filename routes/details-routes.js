const express = require('express');

const router = express.Router();

const detailsController = require('../controllers/details-controllers');

router.post('/submit', detailsController.submit);

module.exports = router;