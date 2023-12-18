module.exports = (image) => {
  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`;
    return new Promise(async (resolve, reject) => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            requests: [
              {
                image: {
                  content: image,
                },
                features: [
                  {
                    type: 'TEXT_DETECTION', // Refer the docs for the paramas
                    maxResults: 1,
                  },
                ],
              },
            ],
          }),
      });
      response
        .json()
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
}