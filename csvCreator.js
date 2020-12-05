const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
require('events').EventEmitter.defaultMaxListeners = 100000;

// const listingsGen = () => {
//   let i = 0

//   const NUM_LISTINGS = 1000;

//   writer.pipe(fs.createWriteStream('listings-data.csv'));
//   function write() {
//     var ok = true;
//     do{
//       i++;
//       ok = writer.write({
//         listingId: i,
//         listingName: faker.lorem.word(),
//         listingDescription: faker.lorem.words(),
//         listingLocation: faker.address.city(),
//         listingStars: Math.ceil(Math.random() * 5),
//         listingNumReviews: Math.floor(Math.random() * 100)
//       });
//     } while(i < NUM_LISTINGS && ok);
//     if(i < NUM_LISTINGS) {
//       console.log('in here')
//       writer.once('drain', write);
//     }
//   }
//   write();
//   writer.end();
//   console.log('done', i);
// };
const listingsGen = () => {
  writer.pipe(fs.createWriteStream('users-data.csv'));
  for (var i = 0; i < 1000000; i++) {
    writer.write({
      listingId: i+1,
      listingName: faker.lorem.word(),
      listingDescription: faker.lorem.words(),
      listingLocation: faker.address.city(),
      listingStars: Math.ceil(Math.random() * 5),
      listingNumReviews: Math.floor(Math.random() * 100)
    });
  }
  writer.end();
  console.log('done ');
};
const usersGen = () => {
  writer.pipe(fs.createWriteStream('users-data.csv'));
  for (var j = 0; j < 1000000; j++) {
    writer.write({
      listingId: j+1,
      userName: faker.lorem.word(),
      isHost: j%2 === 0
      // insert random data here
    })
  }
  writer.end();
  console.log('done ');
};
const favoritesGen = () => {
  writer.pipe(fs.createWriteStream('favorites-data.csv'));
  for (var k = 0; k < 10000000; k++) {
    writer.write({
      listingId: k+1,
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
  writer.pipe(fs.createWriteStream('userlists-data.csv'));
  for (var l = 0; l < 10000000; l++) {
    writer.write({
      listingId: l+1,
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
const favoriteListsGen = () => {
  writer.pipe(fs.createWriteStream('favoriteLists-data.csv'));
  for (var m = 0; m < 10000000; m++) {
    writer.write({
      listingId: m+1,
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

function dataGen() {
   listingsGen();
   usersGen();
   favoritesGen();
   userListsGen();
   photosGen();
}
dataGen();