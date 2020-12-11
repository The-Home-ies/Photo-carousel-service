

-- CREATE DATABASE sdc
--       WITH   OWNER = joshding
--             ENCODING = 'UTF8'
--             TABLESPACE = photocarousel
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

DROP SCHEMA photocarousel CASCADE;
CREATE SCHEMA photocarousel;

DROP TABLE IF EXISTS photocarousel.listingDetails;
-- 1m
CREATE TABLE photocarousel.listingDetails (
  listingId SERIAL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingDescription VARCHAR(250) NOT NULL,
  listingLocation VARCHAR(100) NOT NULL,
  listingStars REAL,
  listingNumReviews SMALLINT
  -- hostName VARCHAR(100)
  --should hostName be a foreign key?
);

--create another table for just photos
-- 10m
DROP TABLE IF EXISTS photocarousel.photos;

CREATE TABLE photocarousel.photos (
  photoId SERIAL PRIMARY KEY,
  photo VARCHAR,
  listingId INT
  -- listingId INT REFERENCES photocarousel.listingDetails
);



DROP TABLE IF EXISTS photocarousel.users;
-- 10m
CREATE TABLE photocarousel.users (
  userId SERIAL PRIMARY KEY,
  userName VARCHAR(100) NOT NULL,
  isHost BOOLEAN
);

DROP TABLE IF EXISTS photocarousel.userLists;
-- favorite list names, 1m
CREATE TABLE photocarousel.userLists (
  listId SERIAL PRIMARY KEY,
  listName VARCHAR(100),
  userId INT
  --userId INT REFERENCES photocarousel.users(userId)
);

DROP TABLE IF EXISTS photocarousel.favoriteListings;
-- listings that have been favorited, 10m%1m
CREATE TABLE photocarousel.favoriteListings (
  favoriteId SERIAL PRIMARY KEY,
  listId INT,
  --listId INT REFERENCES photocarousel.userLists(listId),
  listingId INT
  --listingId INT REFERENCES photocarousel.listingDetails(listingId)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `favorites` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
-- ALTER TABLE `favorites` ADD FOREIGN KEY (id_favoritelists) REFERENCES `favoritelists` (`id`);
-- ALTER TABLE `favorites` ADD FOREIGN KEY (id_photos) REFERENCES `photos` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `favoritelists` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `favorites` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`favoritelists`) VALUES
-- ('','');
-- INSERT INTO `favoritelists` (`id`,`name`,`picture`) VALUES
-- ('','','');
-- INSERT INTO `favorites` (`id`,`id_Users`,`id_favoritelists`,`id_photos`) VALUES
-- ('','','','');
-- INSERT INTO `photos` (`id`,`new field`) VALUES
-- ('','');
-- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `User` (`id`,`listname`,`favoritepicture`,`favoriteLists`) VALUES
-- ('','','','');
-- INSERT INTO `photos` (`id`,`listingId`,`photo`,`description`,`listingname`,`listingstars`,`listingnumreviews`,`listinglocation`) VALUES
-- ('','','','','','','','');