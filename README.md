
## Photo Carousel API
**GET**: /api/photo-carousel/favorites/{_userId_}
Gets all favorites that specified user has favorited.

**Path Parameters: **
userId: _required, string_
Target user’s id
**Request Body: ** none
**Example Response**:
{data: [
  {
    favoriteLists: [ 3, 87, 46 ],
    _id: 5fc6e133fa2ebcf5c1ada035,
    userId: 1,
    listName: 'Utah',
    favoritePicture: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1486946255434-2466348c2166_optimized.jpg',
    __v: 0
  },
  {
    favoriteLists: [ 9, 13, 75, 47, 33, 43 ],
    _id: 5fc6e133fa2ebcf5c1ada036,
    userId: 1,
    listName: 'Michigan',
    favoritePicture: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1484154218962-a197022b5858_optimized.jpg',
    __v: 0
  },
  {
    favoriteLists: [ 31, 97, 22, 84, 73, 7 ],
    _id: 5fc6e133fa2ebcf5c1ada037,
    userId: 2,
    listName: 'Washington',
    favoritePicture: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1575413905463-3750e44edafe_optimized.jpg',
    __v: 0
  }]

**GET**: /api/photo-carousel/{_id_}/photos
Gets photos based on id of photos.
**request body: ** none
**Path Parameters: **
id: _required, string_
Target photo's id

**Example response**:
{data: {
    _id: 5fc6e133fa2ebcf5c1ad9cb8,
    id: 97,
    listingId: 8,
    photo: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1516455590571-18256e5bb9ff_optimized.jpg',
    description: 'Non quisquam qui et iusto libero nostrum sed iusto vero.',
    listingName: 'Transparent Buster Island Home',
    listingStars: 1.81,
    listingNumReviews: 422,
    listingLocation: 'Cambridgeshire, Pennsylvania, United States',
    __v: 0
  },
  {
    _id: 5fc6e133fa2ebcf5c1ad9cb9,
    id: 98,
    listingId: 8,
    photo: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1493663284031-b7e3aefcae8e_optimized.jpg',
    description: 'Nesciunt non error deserunt assumenda blanditiis aut aperiam magnam nostrum.',
    listingName: 'Transparent Buster Island Home',
    listingStars: 1.81,
    listingNumReviews: 422,
    listingLocation: 'Cambridgeshire, Pennsylvania, United States',
    __v: 0
  },
  {
    _id: 5fc6e133fa2ebcf5c1ad9cba,
    id: 99,
    listingId: 9,
    photo: 'https://s3-us-west-1.amazonaws.com/fec.home.images/Optimized/photo-1506368249639-73a05d6f6488_optimized.jpg',
    description: 'Nam placeat placeat vel aut.',
    listingName: 'Customized Stark Trace Home',
    listingStars: 4.86,
    listingNumReviews: 91,
    listingLocation: 'Borders, Maryland, United States',
    __v: 0
}
}

**POST**: /api/photo-carousel/favorites
Creates a new favoriteList and posts picture to list.

**request body: ** {userId: <userId>, listName: <listName>}

**response: ** status 200


**PUT**: /api/photo-carousel/favorites
Updates favorites status
**request body: ** n/a
**response: ** status 200

**DELETE**:  /api/photo-carousel/favorites/{listName}
Deletes list from database
**Path Parameters: **
listName: _required, string_
Target list name to delete
**request body: ** n/a
**response: ** status 200


################################################################


# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Style Guide
Refer to the [AirBnb Style Guide](https://github.com/airbnb/javascript).

