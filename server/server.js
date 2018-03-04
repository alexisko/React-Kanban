// PACKAGES
const express = require('express');
const bp = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 8080;
const CONFIG = require('./config/config.json');

// DB
// const db = require('./models');

// EXPRESS
const app = express();

// ROUTERS

// BODY-PARSER
// app.use(bp.urlencoded({extended:true}));

// SESSION

// PASSPORT

// ROUTES

// SERVER
const server = app.listen(PORT, () => {
  console.log(`SERVER: Listening on ${PORT}.`);
});