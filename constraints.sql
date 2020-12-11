

  ALTER TABLE photocarousel.photos ADD CONSTRAINT constraint_listing FOREIGN KEY (listingId) REFERENCES photocarousel.listingDetails(listingId);

  ALTER TABLE photocarousel.userLists ADD CONSTRAINT constraint_user FOREIGN KEY (userId) REFERENCES photocarousel.users(userId);

  ALTER TABLE photocarousel.favoriteListings
  ADD CONSTRAINT constraint_list FOREIGN KEY (listId) REFERENCES photocarousel.userLists(listId),
  ADD CONSTRAINT constraint_listing FOREIGN KEY (listingId) REFERENCES photocarousel.listingDetails(listingId)
  ;

 CREATE INDEX listing_idx ON photocarousel.photos(listingId);

 CREATE INDEX user_idx ON photocarousel.userLists(userId);

 CREATE INDEX _idx ON photocarousel.favoriteListings(listingId);

 CREATE INDEX list_idx ON photocarousel.favoriteListings(listId);


