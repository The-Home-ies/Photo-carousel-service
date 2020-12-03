const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photoCarousel', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoose!'));


const photoCarouselSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  listingId: Number,
  photo: String,
  description: String,
  listingName: String,
  listingStars: Number,
  listingNumReviews: Number,
  listingLocation: String,
});
// two different list names
// array of home listings?
// front end, checks current listing that page is loaded to and checks to see the array to see if it matches the user's favorites. If it does match, then adds current listing to the array
// favoriteLists array of id should match home listings
// favoritepicture: picture next to favorite.
//each of the lists ahve an array
// update: add in favoritelistings array
// 
const userFavoritesSchema = new mongoose.Schema({
  userId: Number,
  listName: String,
  favoriteLists: Array,
  favoritePicture: String,
});

const PhotoCarousel = mongoose.model('photoCarousel', photoCarouselSchema);
const UserFavorite = mongoose.model('userFavorites', userFavoritesSchema);

module.exports.PhotoCarousel = PhotoCarousel;
module.exports.UserFavorite = UserFavorite;
