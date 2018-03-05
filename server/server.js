// PACKAGES
const express = require('express');
const bp = require("body-parser");
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 8080;
const CONFIG = require('./config/config.json');

// DB
const db = require('./models');
const { User } = db;

// EXPRESS
const app = express();

// ROUTERS
const userRouter = require('./routes/user.js');
const cardRouter = require('./routes/card.js');

// BODY-PARSER
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

// SESSION
app.use(session({
  store: new RedisStore(),
  secret: CONFIG.SESSION_SECRET,
  name: 'express-session',
  cookie: {
    maxAge: 1000000
  },
  saveUninitialized: true
}));

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where: {
        username: username
      }
    }).then((user) => {
      // user.password === hashed password
      if(user !== null) {
        bcrypt.compare(password, user.password)
          .then(result => {
            if(result) {
              console.log('SUCESS: Username and password are correct!');
              return done(null, user);
            } else {
              console.log('ERROR: Password does not match!');
              return done(null, false, { message: 'ERROR: Incorrect Password'});
            }
          })
          .catch(err => {
            console.log('ERROR: ', err);
            return done(null, false, { message: 'ERROR: Incorrect Username!' });
          });
      } else {
        throw 'User not found!';
      }
    })
    .catch((err) => {
      // user not found
      console.log('ERROR: ', err);
      return done(null, false, { message: 'Could not find user!' });
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findOne({
    where: {
      id: userId
    }
  })
    .then((user) => {
      return done(null, {
        id: user.id,
        username: user.username
    })
    .catch((err) => {
      done(err, user);
    });
  });
});

// ROUTES
app.use('/user', userRouter);

// SERVER
const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`SERVER: Listening on ${PORT}.`);
});