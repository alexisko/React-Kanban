const express = require('express');
const router = express.Router();
const db = require('../models');
const Card = db.Card;

router.route('/new')
  .post((req, res) => {
    console.log("ROUTER", req.body);
    Card.create({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo
    })
      .then((card) => {
        console.log("NEW", card);
        res.json(card);
      })
      .catch((err) => { // ERROR
        console.log(err);
      });
  });

router.route('/:id')
  .get((req, res) => {
    Card.findById(req.params.id)
      .then((card) => {
        console.log("CARD", card);
        res.json(card);
      })
      .catch((err) => { // ERROR
        console.log(err);
      });
  })
  .put((req, res) => {
    Card.update({
      title: req.body.title,
      priority: req.body.priority,
      status: req.body.status,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo
    }, {
      where: {
        id: parseInt(req.params.id)
      }
    })
      .then((card) => {
        console.log("SERVER", card[0]);
        if(card[0] === 1) {
          return Card.findAll();
        }
      })
      .then((cards) => {
        res.json(cards); // returns all cards back
      })
      .catch((err) => { // ERROR
        console.log(err);
      });
  })
  .delete((req, res) => {
    Card.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((card) => {
        if(card === 1) {
          return Card.findAll();
        }
      })
      .then((cards) => {
        res.json(cards); // returns all cards back
      })
      .catch((err) => { // ERROR
        console.log(err);
      });
  });

router.route('/')
  .get((req, res) => {
    Card.findAll()
      .then((cards) => {
        console.log("ALL CARDS", cards);
        res.json(cards);
      }).catch((err) => { //ERROR
        console.log(err);
      });
  });

module.exports = router;