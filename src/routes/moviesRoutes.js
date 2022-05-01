const app = require ('express');
const router = app.Router();
const asyncHandler = require ('express-async-handler');
const moviesController = require('../controllers/moviesController');
const { validateSearch, validateGetMovies, validateUpdatePlot } = require('../utils/validationsMovies');


router.get("/movies/search", validateSearch, asyncHandler(moviesController.searchMovie)) // get 1 movie and store in DB
router.get("/movies", validateGetMovies, asyncHandler(moviesController.getMovies)) // get all movies in DB with pagination
router.post("/movies", validateUpdatePlot, asyncHandler(moviesController.updatePlotMovie)) // update movie in DB

module.exports =  router;