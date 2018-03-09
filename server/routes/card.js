const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;

/* Create new card */
// router.route('/new')
//   .post((req, res) => {
//     Card.create({
//       task: req.body.task,
//       priority: req.body.priority,
//       status: req.body.status,
//       created_by: req.body.createdBy,
//       assigned_to: req.body.assignedTo
//       user_id: req.user.user_id
//     })
//       .then((photo) => {
//         res.end();
//       })
//       .catch((err) => {
//         console.log('ERROR: ', err);
//       })
//   });

/* View all cards */
router.route('/all')
  .get((req, res) => {
    Card.findAll()
      .then((cards) => {
        console.log(cards);
        res.json(cards);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  });

/* View all cards by user */

/* Edit card */

module.exports = router;