const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const { errorNames } = require('../utils/constants');
const CastError = require('../errors/CastError');
const ValidationError = require('../errors/ValidationError');

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        next(new NotFoundError());
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      switch (err.name) {
        case errorNames.cast:
          next(new CastError());
          break;
        default:
          next(new Error());
      }
    });
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => {
      next(new Error());
    });
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({
    name,
    about,
    avatar,
  })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      switch (err.name) {
        case errorNames.validation:
          next(new ValidationError());
          break;
        default:
          next(new Error());
      }
    });
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      name,
      about,
    },
    { runValidators: true },
  )
    .then((user) => {
      if (!user) {
        next(new NotFoundError());
        return;
      }
      res.send({
        ...user._doc,
        name,
        about,
      });
    })
    .catch((err) => {
      switch (err.name) {
        case errorNames.cast:
          next(new CastError());
          break;
        case errorNames.validation:
          next(new ValidationError());
          break;
        default:
          next(new Error());
      }
    });
};

module.exports.updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true })
    .then((user) => {
      if (!user) {
        next(new NotFoundError());
        return;
      }
      res.send({
        ...user._doc,
        avatar,
      });
    })
    .catch((err) => {
      switch (err.name) {
        case errorNames.cast:
          next(new CastError());
          break;
        case errorNames.validation:
          next(new ValidationError());
          break;
        default:
          next(new Error());
      }
    });
};
