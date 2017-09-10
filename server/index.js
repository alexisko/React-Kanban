// PACKAGES
const express = require('express');
const bp = require('body-parser');

// DEV-CREATED FILES
const db = require('./models');

// FILES
const PORT = process.env.PORT || 8080;

const app = express();

// DB
const { Card, User } = db;

// ROUTERS
// const indexRouter = require('./routes/index.js');
const cardRouter = require('./routes/card.js');
// const userRouter = require('./routes/user.js');

// BODY-PARSER
app.use(bp.urlencoded({extended:true}));

// PUBLIC STATIC FILES
// app.use(express.static('public'));

// Enables cross-origin resource sharing on Express (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
app.use('/card', cardRouter);
// app.use('/user', userRouter);

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`SERVER: Listening on ${PORT}`);
});