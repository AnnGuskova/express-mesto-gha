const { errorCodes, errorMessages } = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || errorCodes.general;
  const message = statusCode === errorCodes.general ? errorMessages.general : err.message;
  res.status(statusCode).send({ message });
  next();
};

module.exports = errorHandler;
