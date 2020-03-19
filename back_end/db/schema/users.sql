DROP TABLE IF EXISTS users
CASCADE;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) ,
  last_name VARCHAR(255) ,
  email VARCHAR(255) ,
  date_of_birth VARCHAR(255) ,
  created_date VARCHAR(225),
  group_id INTEGER NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
);