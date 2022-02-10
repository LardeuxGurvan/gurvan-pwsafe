const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/:pwLabel', controllers.getPassword);
router.post('/:pwLabel', controllers.savePassword);

module.exports = router;
