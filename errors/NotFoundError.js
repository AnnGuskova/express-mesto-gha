const { errorNames, errorCodes, errorMessages } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message ?? errorMessages.notFound);
    this.name = errorNames.notFound;
    this.statusCode = errorCodes.notFound;
  }
}

module.exports = NotFoundError;
