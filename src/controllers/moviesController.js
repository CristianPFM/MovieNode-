const { fetchMovie, getAllMoviesPagination, updatePlotMovie } = require("../services/moviesService");


exports.searchMovie = async (req, res) => {
    const { title } = req.query;
    const { year } = req.headers;
    const movie = await fetchMovie(title, year);
    res.status(200).json(movie);
};

exports.getMovies = async (req, res) => {
    const { page } = req.headers || 1;
    const movies = await getAllMoviesPagination(page);
    res.status(200).json(movies);
};

exports.updatePlotMovie = async (req, res) => {
    const { movie, find, replace } = req.body;
    const updateMovie = await updatePlotMovie(movie, find, replace);
    res.status(200).json(updateMovie);
};


