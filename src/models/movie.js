const { Schema, model } = require("../config/mongo");
const movieSchema = new Schema({
  Title: String,
  Year: String,
  Released: String,
  Genre: String,
  Director: String,
  Actors: String,
  Plot: String,
  Ratings: Array
});

const movie = model("moviesdb", movieSchema);
module.exports = { movie };