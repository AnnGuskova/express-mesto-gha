const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

router.use(require('helmet')());

router.use('/', require('./auth'));

router.use(require('../middlewares/auth'));

router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

router.all('*', (req, res, next) => {
  next(new NotFoundError());
});

module.exports = router;
