const { errorNames, errorCodes, errorMessages } = require('../utils/constants');

class CastError extends Error {
  constructor(message) {
    super(message ?? errorMessages.cast);
    this.name = errorNames.cast;
    this.statusCode = errorCodes.cast;
  }
}

module.exports = CastError;
