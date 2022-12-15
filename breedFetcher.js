const request = require("request");
let args = process.argv.slice(2).toString().replaceAll(",", " ");
let URL = "https://api.thecatapi.com/v1/breeds";


request(URL, (error, response, body) => {
  if (error) {
    console.log(error.message);
    return;
  }
  const data = JSON.parse(body);
  let result = "Please enter a valid cat breed";
  for (let cat of data) {
    if (cat.name === args) {
      result = cat.description;
    }
  }
  console.log(result);
});
