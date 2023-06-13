const { PORT = 3000 } = process.env;

const express = require('express');
const NotFoundError = require('./errors/NotFoundError');

const app = express();

require('mongoose').connect('mongodb://127.0.0.1:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  autoIndex: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());

app.use(require('express-rate-limit')({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
}));

app.use(require('helmet')());

app.use((req, res, next) => {
  req.user = {
    _id: '648888030fc5c6a7b0d64d75',
  };

  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.all('*', (req, res, next) => {
  next(new NotFoundError());
});

app.use(require('./errors/errorHandler'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
