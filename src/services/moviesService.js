const axios = require('axios');
const {
  consultarPelicula,
  consultarTodo,
  guardarPelicula,
  listaMovieName,
  buscarPlot,
  updatePlot
} = require("../utils/consultasSql");


exports.fetchMovie = async (title, year) => {
  const urlBase = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`;
  !year ? (urlConsulta = urlBase) : (urlConsulta = urlBase + "&y=" + year);
  try {
    const { data } = await axios(urlConsulta);
    if (data.Response === "False") {
      return {
        error: data.Error
      };
    }
    const existe = await consultarPelicula(data.Title);
    if (existe == true) {
      const allInfo = await consultarTodo();
      return allInfo;
    } else {
      const newMovie = await guardarPelicula(data);
      if (newMovie) {
        const allInfo = await consultarTodo();
        return allInfo;
      }
    }
  } catch (error) {
    return error;
  }
};

exports.getAllMoviesPagination = async (page) => {
  return await listaMovieName(page)
};

exports.updatePlotMovie = async (movie, find, replace) => {
  const plot = await buscarPlot(movie);
  const plotString = plot[0].Plot;
  const regEx = new RegExp(find, "ig");
  const newPlot = plotString.replace(regEx, replace);
  await updatePlot(movie, newPlot);
  return newPlot
};


