var express = require('express');
var router = express();

var OCR = require('./orc');


router.use('/ocr', OCR);


module.exports = router 