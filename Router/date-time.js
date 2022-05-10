const express = require('express');
const router = express.Router();
const datemodule = require('../module/date-time')

router.get('/get',datemodule.datefile)
router.post('/post',datemodule.createRoom)

module.exports = router;