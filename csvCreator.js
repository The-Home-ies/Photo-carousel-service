const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
var counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  for (var i = 0; i < 100000; i++) {
    writer.write({
      listingId: i+1,
      listingName: faker.lorem.word(),
      listingDescription: faker.lorem.words(),
      listingLocation: faker.address.city(),
      listingStars: Math.ceil(Math.random() * 5),
      listingNumReviews: Math.floor(Math.random() * 100),
      photos: [faker.image.image()]


      // insert random data here
    })
  }
  writer.end();
  console.log('done');
};

dataGen();