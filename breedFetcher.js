const request = require("request");
// function declaration.. this function is called in index.js and it contains the inline callback function.  
const fetchBreedDescription = function (breedName, callback) {
  
  let URL = "https://api.thecatapi.com/v1/breeds/search?q="+breedName;
  //request function syntax expects a callback
  request(URL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    //parses data into an array and the only element is an object
    const data = JSON.parse(body);
   
    let breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else { 
      callback("Breed not found", null);
    }

  });

};
module.exports = { fetchBreedDescription };
