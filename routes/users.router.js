const express = require('express');
const UsersService = require('./../services/user.service');
const router = express.Router();
const service = new UsersService();

// Create
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay parámetros');
  }
});

module.exports = router;
