const express = require('express');

const router = express.Router();

const detailsController = require('../controllers/details-controllers');

router.get('/', detailsController.getAllDetails);

router.post('/submit', detailsController.submit);

router.delete('/:id', detailsController.deleteDetail)

module.exports = router;