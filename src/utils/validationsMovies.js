const { check, validationResult } = require("express-validator");

const validateSearch = [
  check("title").exists({ checkFalsy: true }).withMessage("Title is required"),
  check("year").optional().isInt().withMessage("Year must be a number"),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(403);
      res.send(error.array());
    }
  },
];

const validateGetMovies = [
  check("page")
    .exists({ checkFalsy: true })
    .withMessage("page is required")
    .isInt({ min: 1 })
    .withMessage("page must be a number"),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(403);
      res.send(error.array());
    }
  },
];

const validateUpdatePlot = [
    check("movie")
      .exists({ checkFalsy: true }).withMessage("movie is required").isString().withMessage("movie must be a string"),
    check("find").exists({ checkFalsy: true }).withMessage("Find is required").isString().withMessage("movie must be a string"),
    check("replace").exists({ checkFalsy: true }).withMessage("Replace is required").isString().withMessage("movie must be a string"),
    (req, res, next) => {
      try {
        validationResult(req).throw();
        return next();
      } catch (error) {
        res.status(403);
        res.send(error.array());
      }
    },
  ];

module.exports = { validateSearch, validateGetMovies, validateUpdatePlot };
      
