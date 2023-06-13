const Card = require('../models/card');
const { errorNames } = require('../utils/constants');
const ValidationError = require('../errors/ValidationError');
const CastError = require('../errors/CastError');
const NotFoundError = require('../errors/NotFoundError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => {
      next(new Error());
    });
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.send(card))
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

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        next(new NotFoundError());
        return;
      }
      res.send(card);
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

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        next(new NotFoundError());
        return;
      }
      res.send(card);
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

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        next(new NotFoundError());
        return;
      }
      res.send(card);
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
