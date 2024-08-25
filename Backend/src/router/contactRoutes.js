const express = require('express');
const { createContact,getContacts } = require('../controller/contactController.js');

const router = express.Router();

router.post('/', createContact);
router.get('/get-contact-admin', getContacts);

module.exports = router;
