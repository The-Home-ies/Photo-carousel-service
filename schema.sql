

-- CREATE DATABASE sdc
--       WITH   OWNER = joshding
--             ENCODING = 'UTF8'
--             TABLESPACE = photocarousel
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'photos'
--
-- ---
-- could potentially model out amenities, also have a field that is a host
-- DROP SCHEMA photocarousel CASCADE;
-- CREATE SCHEMA photocarousel;

DROP TABLE IF EXISTS photocarousel.listingDetails;

CREATE TABLE photocarousel.listingDetails (
  listingId SERIAL PRIMARY KEY,
  listingName VARCHAR(100) NOT NULL,
  listingDescription VARCHAR(250) NOT NULL,
  listingLocation VARCHAR(100) NOT NULL,
  listingStars REAL,
  listingNumReviews SMALLINT,
  hostName VARCHAR(100),
  --will benchmark embedded photo array and separate photo table later for query speed improvements.
);

--create another table for just photos
DROP TABLE IF EXISTS photocarousel.photos;

CREATE TABLE photocarousel.photos (
  photoId SERIAL PRIMARY KEY,
  photos VARCHAR,
  listingId INT REFERENCES photocarousel.listingDetails,
)


DROP TABLE IF EXISTS photocarousel.userLists;

CREATE TABLE photocarousel.userLists (
  listName VARCHAR(100) NOT NULL,
  userId INT REFERENCES users(userId),
);

-- ---
-- Table 'favoritelists'
--
-- ---

DROP TABLE IF EXISTS photocarousel.favoriteListings;

CREATE TABLE photocarousel.favoriteListings (
  favoriteId SERIAL PRIMARY KEY,
  listName VARCHAR(100) REFERENCES userLists(listName),
  listingId INT REFERENCES listingDetails(listingId),
  -- order SMALLINT NOT NULL
);

-- ---
-- Table 'favorites'
--
-- ---
-- could have a property that holds info about whether or not the user is a host. if is a host, have a foreign key with the host id.
DROP TABLE IF EXISTS photocarousel.users;

CREATE TABLE photocarousel.users (
  userId SERIAL PRIMARY KEY,
  userName VARCHAR(100) NOT NULL,
  isHost BOOLEAN,
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