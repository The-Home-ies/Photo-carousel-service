

CREATE DATABASE sdc
      WITH   OWNER = joshding
            ENCODING = 'UTF8'
            TABLESPACE = photocarousel
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
--
-- ---
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name ( [
  { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE parent_table [ like_option ... ] }
    [, ... ]
] )

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listname` VARCHAR NULL DEFAULT NULL,
  `favoritepicture` VARCHAR NULL DEFAULT NULL,
  `favoriteLists` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `listingId` INTEGER NULL DEFAULT NULL,
  `photo` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `listingname` VARCHAR NULL DEFAULT NULL,
  `listingstars` INTEGER NULL DEFAULT NULL,
  `listingnumreviews` INTEGER NULL DEFAULT NULL,
  `listinglocation` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


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