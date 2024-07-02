const express = require('express');
const { createContact } = require('../controller/contactController.js');

const router = express.Router();

router.post('/', createContact);

module.exports = router;
