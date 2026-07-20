const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET a single contact by id
router.get('/:id', contactsController.getSingleContact);

// POST - create a new contact
router.post('/', contactsController.createContact);

// PUT - update a contact by id
router.put('/:id', contactsController.updateContact);

// DELETE a contact by id
router.delete('/:id', contactsController.deleteContact);

module.exports = router;