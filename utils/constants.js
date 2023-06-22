module.exports.ERROR_NAMES = {
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  CONFLICT_ERROR: 'CONFLICT_ERROR',
  FORBIDDEN_ERROR: 'FORBIDDEN_ERROR',
  GENERAL_ERROR: 'GENERAL_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
};

module.exports.ERROR_CODES = {
  AUTHORIZATION_ERROR: 401,
  CONFLICT_ERROR: 409,
  FORBIDDEN_ERROR: 403,
  GENERAL_ERROR: 500,
  NOT_FOUND_ERROR: 404,
  VALIDATION_ERROR: 400,
};

module.exports.ERROR_MESSAGES = {
  AUTHORIZATION_ERROR: 'Ошибка авторизации',
  CONFLICT_ERROR: 'Ошибка конфликта данных',
  FORBIDDEN_ERROR: 'Ошибка прав доступа',
  GENERAL_ERROR: 'Непредвиденная ошибка',
  NOT_FOUND_ERROR: 'Ошибка поиска данных',
  VALIDATION_ERROR: 'Ошибка формата данных',
};
