const CustomError = require("./CustomError");

exports.CustomError = CustomError;

exports.customErrorHandler = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).json({ msg: err.msg });
  } else {
    next(err);
  }
};
