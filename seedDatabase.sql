SET search_path TO photocarousel;

COPY listingdetails(listingid, listingname, listingdescription, listinglocation, listingstars, listingnumreviews)
FROM '/Users/joshding/hackReactor/SDC/photo-carousel-service/listings-data.csv'
WITH (DELIMITER ',', FORMAT CSV, HEADER true);

COPY photos(photoid, photo, listingid)
FROM '/Users/joshding/hackReactor/SDC/photo-carousel-service/photos-data.csv'
WITH (DELIMITER ',', FORMAT CSV, HEADER true);

COPY users(userId, userName, isHost)
FROM '/Users/joshding/hackReactor/SDC/photo-carousel-service/users-data.csv'
WITH (DELIMITER ',', FORMAT CSV, HEADER true);

COPY userLists(listId, listName, userId)
FROM '/Users/joshding/hackReactor/SDC/photo-carousel-service/userLists-data.csv'
WITH (DELIMITER ',', FORMAT CSV, HEADER true);

COPY favoriteListings(favoriteId, listId, listingId)
FROM '/Users/joshding/hackReactor/SDC/photo-carousel-service/favoriteListings-data.csv'
WITH (DELIMITER ',', FORMAT CSV, HEADER true);