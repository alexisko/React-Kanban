const express = require('express');
const router = express.Router();
const db = require('../models');
const { Card } = db;

/* Create new card */
router.route('/new')
  .post((req, res) => {
    console.log(req.body);
    Card.create({
      task: req.body.task,
      priority: req.body.priority,
      status: req.body.status,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to,
      user_id: req.body.user_id
    })
      .then((card) => {
        res.end();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  });

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

/* Edit card */
router.route('/:id')
  .get((req, res) => {
    Card.findById(parseInt(req.params.id))
      .then((card) => {
        res.json(card);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  })
  .put((req, res) => {
    Card.update({
      task: req.body.task,
      priority: req.body.priority,
      status: req.body.status,
      assigned_to: req.body.assigned_to
    }, {
      where: {
        id: parseInt(req.params.id)
      }
    })
      .then((card) => {
        res.end();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  })
  .delete((req, res) => {
    Card.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.end();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  });

module.exports = router;