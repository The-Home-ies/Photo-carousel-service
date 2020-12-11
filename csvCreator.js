const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');

//for json, change writer to just fs.createWriteStream
// use modulo with existing arrays. index lookup on array instead of Math.random()
// [1,2,3]
// [3,4,5,6]
const writeListings = fs.createWriteStream('listings-data.csv');
  writeListings.write('listingId,listingName,listingDescription,listingLocation,listingStars,listingNumReviews\n', 'utf8');

const listingsGen = (writer, encoding, callback) => {
  let i = 0

  const NUM_LISTINGS = 1;
  function write() {
    var ok = true;
    do{
        i++;
        const listingId = i;
        const listingName= faker.lorem.word();
        const listingDescription= faker.lorem.words();
        const listingLocation = faker.address.city();
        const listingStars = Math.ceil(Math.random() * 5);
        const listingNumReviews = Math.floor(Math.random() * 100);
        const data = `${listingId},${listingName},${listingDescription},${listingLocation},${listingStars},${listingNumReviews}\n`
      if (i === NUM_LISTINGS- 1) {
        ok = writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while(i < NUM_LISTINGS && ok);
    if(i < NUM_LISTINGS) {
      //console.log('in here', i)
      writer.once('drain', write);
    }
  }
  write();
  console.log('done');
};

const writePhotos = fs.createWriteStream('photos-data.csv');
  writePhotos.write('photoId,photos,listingId\n', 'utf8');
// photos stored: from 79 to 610 in jpeg
const photosGen = (writer, encoding, callback) => {
  let m = 0

  const NUM_PHOTOS = 1;
  const URL = 'https://s3-us-west-1.amazonaws.com/fec.hr/apartments';
    const FORMAT = '.jpeg';
  function write() {
    var ok = true;

    do{
      m++;
      const photoId= m;
      const photo= URL+((m%520)+79) + FORMAT;
      const listingId = Math.floor((Math.random() * 100000) + 1)
      const data = `${photoId},${photo},${listingId}\n`;
      if (m === NUM_PHOTOS- 1) {
        ok = writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while(m < NUM_PHOTOS && ok);
    if(m < NUM_PHOTOS) {
      //console.log('in here', i)
      writer.once('drain', write);
    }
  }
  write();
  console.log('done');
};

const writeUsers = fs.createWriteStream('users-data.csv');
  writeUsers.write('userId,userName,isHost\n', 'utf8');

const usersGen = (writer, encoding, callback) => {
  let j = 0

  const NUM_USERS = 1;
  function write() {
    var ok = true;
    do{
      j++;
      const userId= j;
      const userName= faker.lorem.word();
      const isHost= j%2 === 0
        const data = `${userId},${userName},${isHost}\n`
      if (j === NUM_USERS- 1) {
        ok = writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while(j < NUM_USERS && ok);
    if(j < NUM_USERS) {
      //console.log('in here', i)
      writer.once('drain', write);
    }
  }
  write();
  console.log('done');
};

const writeUserLists = fs.createWriteStream('userLists-data.csv');
  writeUserLists.write('listId,listName,userId\n', 'utf8');
const findUniqueListName = (dict) => {
  var name = faker.lorem.word();
  while(dict[name]) {
    console.log(dict[name])
    name = faker.lorem.word();
  }
  dict[name] = true;
  console.log('outside')
  return name;
}
const userListsGen = (writer, encoding, callback) => {
  let l = 0
  var listNameDict={};
  const NUM_USERLISTS = 1;
  function write() {
    var ok = true;

    do{
      l++;
      const listId= l;
      const listName= faker.lorem.word();
      const userId = Math.floor((Math.random() * 100000))+ 1;
       //+ 9000000);
      const data = `${listId},${listName},${userId}\n`;
      if (l === NUM_USERLISTS- 1) {
        ok = writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while(l < NUM_USERLISTS && ok);
    if(l < NUM_USERLISTS) {
      //console.log('in here', i)
      writer.once('drain', write);
    }
  }
  write();
  console.log('done');
};

const writeFavorites = fs.createWriteStream('favoriteListings-data.csv');
  writeFavorites.write('favoriteId,listId,listingId\n', 'utf8');

const favoriteListingsGen = (writer, encoding, callback) => {
  let k = 0

  const NUM_FAVORITES = 1;
  function write() {
    var ok = true;
    do{
      k++;
      const favoriteId= k+1;
      const listId= Math.ceil(Math.random()* 10000);
      const listingId= Math.ceil(Math.random()* 10000);
      const data = `${favoriteId},${listId},${listingId}\n`;
      if (k === NUM_FAVORITES- 1) {
        ok = writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while(k < NUM_FAVORITES && ok);
    if(k < NUM_FAVORITES) {
      //console.log('in here', i)
      writer.once('drain', write);
    }
  }
  write();
  console.log('done');
};





function dataGen() {
   listingsGen(writeListings, 'utf-8', () => {writeListings.end()});
  photosGen(writePhotos, 'utf-8', () => {writePhotos.end()});
   usersGen(writeUsers, 'utf-8', () => {writeUsers.end()});
    userListsGen(writeUserLists, 'utf-8', () => {writeUserLists.end()});
    favoriteListingsGen(writeFavorites, 'utf-8', () => {writeFavorites.end()});


}
dataGen();