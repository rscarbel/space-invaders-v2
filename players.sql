DROP DATABASE IF EXISTS players;
CREATE DATABASE players;

\c players;

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  ship_max_health INTEGER,
  ship_agility REAL,
  ship_power REAL,
  ship_firerate INTEGER,
  ship_accuracy REAL,
  ship_armor REAL,
  healers INTEGER,
  high_score INTEGER,
  money INTEGER
);

INSERT INTO players (name, ship_max_health, ship_agility, ship_power, ship_firerate, ship_accuracy, ship_armor, healers, high_score, money)
  VALUES ('Player1', 25, 0.0, 4, 300, 0.7, 0, 1, 0, 0);