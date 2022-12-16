const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  let URL = "https://api.thecatapi.com/v1/breeds/search?q="+breedName;
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else { 
      callback("breed not found");
    }

  });

};
module.exports = { fetchBreedDescription };
