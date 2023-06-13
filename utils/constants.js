module.exports.errorNames = {
  general: 'GeneralError',
  cast: 'CastError',
  notFound: 'NotFoundError',
  validation: 'ValidationError',
};

module.exports.errorCodes = {
  general: 500,
  cast: 400,
  notFound: 404,
  validation: 400,
};

module.exports.errorMessages = {
  general: 'Непредвиденная ошибка',
  cast: 'Ошибка формата данных',
  notFound: 'Ошибка поиска данных',
  validation: 'Ошибка формата данных',
};
