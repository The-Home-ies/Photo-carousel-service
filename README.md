
# Photo Carousel API
## Gets all favorites that specified user has favorited.
**GET**: /api/photo-carousel/favorites/:id


**Path Parameters:**
userId: _required, string_
Target user’s id

**Request Body:** none

**Success Status Code:** 200

**Example Response**: type: JSON



## Gets photos based on id of listing.
**GET**: /api/photo-carousel/:listingId/photos


**request body:** none

**Success Status Code:** 200

**Path Parameters:**
id: _required, string_
Target photo's id

**Example response**: type: JSON
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


## Creates a new favoriteList and posts picture to list.
**POST**: /api/photo-carousel/favorites


**request body:** {userId: <userId>, listName: <listName>}

**response:** JSON status 200

## Creates a new Listing and posts picture to list.
**POST**: /api/photo-carousel/listing


**request body:** {listingId,
  listingName,
  listingDescription,
  listingLocation,
  listingStars,
  listingNumReviews,
  hostName,
  amenities}

**response:** JSON status 200


## Updates favorites status
**PUT**: /api/photo-carousel/favorites

**request body:** n/a
**response:** JSON status 200
{
    "userId": 1,
    "listName": "US of A"
}

## Updates listing for host
**PUT**: /api/photo-carousel/:listingId

**request body:** n/a
**response:** JSON status 200


## Deletes list from database
**DELETE**:  /api/photo-carousel/favorites/:listName

**Path Parameters:**
listName: _required, string_
Target list name to delete
**request body:** n/a
**response:** status 200



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

