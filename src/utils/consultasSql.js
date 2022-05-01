const { movie } = require("../models/movie");

const consultarPelicula = async (pelicula) => {
  const peliculaBuscada = await movie.find({ Title: pelicula });
  console.log("pelicula buscada "+ peliculaBuscada)
  console.log(peliculaBuscada.length);
  const existe = peliculaBuscada.length == 1 ? true : false;
  return existe;
};

const guardarPelicula = (data) => {
  const newMovie = new movie({
    Title: data.Title,
    Year: data.Year,
    Released: data.Released,
    Genre: data.Genre,
    Director: data.Director,
    Actors: data.Actors,
    Plot: data.Plot,
    Ratings: data.Ratings,
  });

  return newMovie.save();
};

const consultarTodo = () => {
  const todo = movie.find();
  return todo;
};

const listaMovieName = (pagina) => {
  const moviesTitle = movie
    .find({}, { Title: 1, _id: 0 })
    .limit(5)
    .skip(5 * (pagina - 1));
  return moviesTitle;
};

const buscarPlot = async (title) => {
  return await movie.find({ Title: title }, { Plot: 1, _id: 0 });
};

const updatePlot = (title, newPlot) => {
  const plot = movie.updateOne({ Title: title }, { $set: { Plot: newPlot } });
  return plot;
};

module.exports = {
  guardarPelicula,
  consultarPelicula,
  consultarTodo,
  listaMovieName,
  buscarPlot,
  updatePlot,
};
