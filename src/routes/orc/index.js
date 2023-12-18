var express = require('express');
const { ocr } = require('../../controller');
var router = express.Router();

/* GET home page. */
router.post('/google', ocr.googleOcr);

module.exports = router;
