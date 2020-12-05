const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
require('events').EventEmitter.defaultMaxListeners = 100000;

const listingGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  let i = 1000000;
  for (var i = 0; i < 10000000; i++) {
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
  console.log('done with 10m');
};
const userGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  let i = 1000000;
  for (var i = 0; i < 10000000; i++) {
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
  console.log('done with 10m');
};
const favoritesGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  let i = 1000000;
  for (var i = 0; i < 10000000; i++) {
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
  console.log('done with 10m');
};
const userListsGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  let i = 1000000;
  for (var i = 0; i < 10000000; i++) {
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
  console.log('done with 10m');
};
const favoritesGen = () => {
  writer.pipe(fs.createWriteStream('seed-data.csv'));
  let i = 1000000;
  for (var i = 0; i < 10000000; i++) {
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
  console.log('done with 10m');
};

async function dataGen() {
  await listingsGen();
  await usersGen();
  await favoritesGen();
  await userListsGen();
  await photosGen();
}
dataGen();