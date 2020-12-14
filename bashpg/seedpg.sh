sudo -u postgres psql photocarousel < schema.sql

node csvCreator.js

sudo -u postgres psql photocarousel < seedDatabase.sql

sudo -u postgres psql photocarousel < constraints.sql