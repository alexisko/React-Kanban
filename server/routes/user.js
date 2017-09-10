const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

router.route('/login');

router.route('/join');

router.route('/logout');

module.exports = router;