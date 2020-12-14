const db = require('./db/mongoDB.js');
var faker = require('faker');
const cluster = require('cluster');
const v8 = require('v8');

//Model.collection.insert?

// basically establish a connection and insert into the document. with model.collection.insert.
const listingdetails = db.db.collection('listingdetails');
const userCollection = db.db.collection('users');
const listCollection = db.db.collection('favoriteLists');
// console.log('listingdetails: ',db.db.collection('listingdetails'));
function generateRandomArrayOfNumbers(length) {
  var array = [];
  for(var i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 1000));
  }
  return array;

}
var z = 0;
const URL = 'https://s3-us-west-1.amazonaws.com/fec.hr/apartments';
const FORMAT = '.jpeg';
function generateArrayOfTenPhotos() {
  var array = [];
  var y = z;
  for(; z < y+10; z++) {

    array.push(URL+((z%520)+79) + FORMAT);
  }
  return array;
}
function createListingDetail (id) {
  var listing = {};
  listing.listingId = id;
  listing.listingDescription = faker.lorem.sentence();
  listing.listingLocation = faker.address.city();
  listing.listingName = faker.lorem.word();
  listing.listingStars = Math.ceil(Math.random() * 5);
  listing.listingNumReviews = Math.ceil(Math.random() * 45);
  listing.photos = generateArrayOfTenPhotos();
  //console.log('listing.photos: ', listing.photos)
  return listing;
}

function createUser (id) {
  var user = {};
  user.userId = id;
  user.userName = faker.name.firstName();
  user.favoriteLists = generateRandomArrayOfNumbers(5);
  return user;
}

function createFavoriteList(id) {
  var list = {};
  list.listId = id;
  list.listName = faker.lorem.word();
  list.listings = generateRandomArrayOfNumbers(5);
  return list;
}

async function writeListings() {
const NUM = 100000;
let listings = [];
for (let k = 0; k < NUM; k++) {
  listings.push(createListingDetail(k));
  const isLastItem = k === NUM - 1;
  if (k % 10000 === 0 || isLastItem) {

      await listingdetails.insertMany(listings);
    listings = [];
  }
}
//listingdetails.createIndex( { listingId: -1 } ).then(() => console.log('index created!'));
console.log('done');
}
async function writeUsers() {
  const NUM = 1000000;
  let users = [];
  for (let k = 0; k < NUM; k++) {
    users.push(createUser(k));
    const isLastItem = k === NUM - 1;
    if (k % 10000 === 0 || isLastItem) {
      await userCollection.insertMany(users);
      users = [];
    }
  }

  console.log('done');
  }

  async function writeFavoriteLists() {
    const NUM = 1000000;
    let lists = [];
    for (let k = 0; k < NUM; k++) {
      lists.push(createFavoriteList(k));
      const isLastItem = k === NUM - 1;
      if (k % 10000 === 0 || isLastItem) {
        await listCollection.insertMany(lists);
        lists = [];
      }
    }
    console.log('done');
  }

writeListings();
writeUsers();
writeFavoriteLists();

