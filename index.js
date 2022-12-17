
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];


//function call                   below here is the inline callback
fetchBreedDescription(breedName, (error, desc) => {
  //request error is handled here to make code cleaner 
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
