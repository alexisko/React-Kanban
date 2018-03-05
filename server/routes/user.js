const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require('../models');
const { User } = db;

const saltRounds = 10;

/* Login existing user */
router.route('/login')
  .post(passport.authenticate('local'), (req, res) => {
    res.json({ username: req.body.username});
  });

/* Logout current user */
router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
  });

/* Create new user */
router.route('/signup')
  .post((req, res) => {
    bcrypt.genSalt(saltRounds)
    .then((salt) => {
      bcrypt.hash(req.body.password, salt)
      .then((hash) => {
        User.create({
          username: req.body.username,
          password: hash
        })
        .then(() => {
          res.end();
        });
      })
      .catch((err) => {
        console.log('ERROR:', err);
      });
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
  });

module.exports = router;