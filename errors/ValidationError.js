const { errorNames, errorCodes, errorMessages } = require('../utils/constants');

class ValidationError extends Error {
  constructor(message) {
    super(message ?? errorMessages.validation);
    this.name = errorNames.validation;
    this.statusCode = errorCodes.validation;
  }
}

module.exports = ValidationError;
