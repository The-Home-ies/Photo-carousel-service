
const Database = require('arangojs').Database;
db = new Database();

db.dropDatabase('photo');
db.createDatabase('photo')
  .then(
  cb);

function cb () {
db.useDatabase('photo');
// a user that hosts that property. could potentially have information about the host about the listing. Storing infomation associated with the host
var listingSchema = {
  'rule' : {
    'type' : 'object',
    'properties' : {
      'listingId' : {
        'type' : 'number',
      },
      'listingName' : {
        'type' : 'string',
      },
      'listingDescription' : {
        'type' : 'string',
      },
      'listingLocation' : {
        'type' : 'string',
      },
      'listingStars' : {
        'type' : 'number',
      },
      'listingNumReviews' : {
        'type' : 'number',
      },
      'photos' : {
        'type' : 'array',
      },
    },
  },
}

/* Create a new collection with schema */
// db.create("schemaCollection", { "schema": schema });

/* Update the schema of an existing collection */
// db.schemaCollection.properties({ "schema": schema });

// can also add here whether or not the user is a host
var listingCollection = db.collection('photos');

listingCollection.create('photos', {"schema": listingSchema}).then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);
var userSchema = {
  rule : {
    type       : 'object',
    properties : {
      userId   : {
        type : 'number'
      },
      userName : {
        type : 'string'
      },
      favLists : {
        type : 'array',
        list : {
          title      : 'list',
          type       : 'object',
          properties : {
            listId    : {
              type : 'number'
            },
            listName  : {
              type : 'string'
            },
            favorites : {
              type  : 'array',
              items : {
                type        : 'number',
                description : 'listingId of favorite'
              }
            }
          }
        }
      }
    }
  }
};

userCollection = db.collection('users');

userCollection.create('users', {"schema": userSchema}).then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);

// favoriteListCollection = db.collection('favoriteList');
// favoriteListCollection.create().then(
//   () => console.log('Collection created'),
//   err => console.error('Failed to create collection:', err)

//
//create some collections
};



