const db = require('./mongoDB.js');
module.exports = {
  getPhotos: (req, res) => {
    console.log('in getPhotos')
    db.ListingDetails.find({ listingId: req.params.id }).exec((err, results) => {
      if (err) {
        res.sendStatus(404);
      } else {
        console.log('here are results: ', results);
        res.json(results);
      }
    });
  },
  // so a userId is determined by...what page you're on?
  // getFavorites: (req, res) => {
  //   db.UserFavorite.find({ userId: req.params.userId }, (err, results) => {
  //     if (err) {
  //       res.sendStatus(404);
  //     } else {
  //       res.json(results);
  //     }
  //   });
  // },
 // creates a favorite for a certain user.
  postFavorite: (req, res) => {
    db.UserFavorite.create(req.body, (err, results) => {
      if (err) {
        res.sendStatus(400);
      } else {
        console.log('post to favorites: ', results);
        res.json(results);
      }
    });
  },
//  // updates a certain user's list with a favorite
//   updateFavorite: (req, res) => {
//     const { userId, listName } = req.body;
//     db.UserFavorite.updateOne({ userId, listName }, req.body, (err) => {
//       if (err) {
//         res.sendStatus(400);
//       } else {
//         console.log('update favorite: ', req.body);
//         // if update favorite req.body.favoriteLists.length is 0, delete list.
//         res.json(req.body);
//       }
//     });
//   },
};