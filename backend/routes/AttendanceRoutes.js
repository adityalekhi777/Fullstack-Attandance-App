const express = require('express');
const route = express.Router();
const attendance = require('../models/AttendanceModel');

route.get('/:date', async (req, res) => {
  const { date } = req.params;

  try {
    const result = await attendance.find({ date: date });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

route.post('/', async (req, res) => {
  const { name, date, status } = req.body;

  try {
    const result = await attendance.create({ ...req.body });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = route;
