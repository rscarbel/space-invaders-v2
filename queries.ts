const promise = require ('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgress://localhost:3001/players';
const db = pgp(connectionString);

const createPlayer = () => {
  return;
}

const getAllPlayers = () => {
  return;
}

const getSinglePlayer = () => {
  return;
}

const updatePlayer = () => {
  return;
}

const deletePlayer = () => {
  return;
}

module.exports = {
  createPlayer: createPlayer,
  getAllPlayers: getAllPlayers,
  getSinglePlayer: getSinglePlayer,
  updatePlayer: updatePlayer,
  deletePlayer: deletePlayer
}