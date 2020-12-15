const mongoose = require('mongoose');
const connections = 15;
mongoose.connect('mongodb://54.183.147.212/sdcservice', { useNewUrlParser: true, useUnifiedTopology: true,
poolSize: connections });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`connected to mongoose with ${connections} connections!`));
const Schema = mongoose.Schema;

const listingDetailsSchema = new Schema({
  listingId: {
    type: Number,
    unique: true,
  },
  listingDescription: String,
  listingLocation: String,
  listingName: String,
  listingStars: Number,
  listingNumReviews: Number,
  photos: [String]
});

const usersSchema = new Schema({
  userId: {
    type: Number,
    unique: true,
  },
  userName: String,
  favoriteLists: [Number]
});
const favoriteListsSchema = new Schema({
  listId: {
    type: Number,
    unique: true,
  },
  listName: String,
  listings: [Number]
});

const ListingDetails = mongoose.model('listingDetails', listingDetailsSchema);
const Users = mongoose.model('users', usersSchema);
const FavoriteLists = mongoose.model('favoriteLists', favoriteListsSchema);

module.exports = {
  ListingDetails,
  //Photos,
  Users,
  FavoriteLists,
  db
  // FavoriteListings
}