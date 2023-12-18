const fs = require('fs');
const googleOcr = require('../../utils/ocr/googleOcr');
const { formatter, validation } = require('../../utils');

module.exports = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files provided' });
    }
    const file = req.files.image;
    const fileBase64 = fs.readFileSync(file.path, { encoding: 'base64' });
   const {fullTextAnnotation: {text: googleOcrTextRes}} = (await googleOcr(fileBase64)).responses[0];

   const result = formatter.googleOcrFormatter(googleOcrTextRes)
   const isValid = validation.googleOcrValidation(result);
   console.log("🚀 ~ file: googleOcr.js:16 ~ module.exports= ~ isValid:", isValid)
   console.log("🚀 ~ file: googleOcr.js:18 ~ module.exports= ~ result:", result)
   if(isValid){
     res.status(200).json(result)
   }else {
    res.status(422).json({
      message: "The data was not recognized correctly.",
      status: 422,
    })
   }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
