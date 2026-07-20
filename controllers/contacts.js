const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.db().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single contact by id
const getSingleContact = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact id' });
    }
    const db = getDb();
    const contactId = new ObjectId(req.params.id);
    const contact = await db
      .db()
      .collection('contacts')
      .findOne({ _id: contactId });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST - create a new contact
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message:
          'All fields are required: firstName, lastName, email, favoriteColor, birthday'
      });
    }

    const newContact = { firstName, lastName, email, favoriteColor, birthday };

    const db = getDb();
    const response = await db.db().collection('contacts').insertOne(newContact);

    if (response.acknowledged) {
      res.status(201).json({ id: response.insertedId });
    } else {
      res.status(500).json({ message: 'Some error occurred while creating the contact' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT - update an existing contact
const updateContact = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact id' });
    }

    const contactId = new ObjectId(req.params.id);
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message:
          'All fields are required: firstName, lastName, email, favoriteColor, birthday'
      });
    }

    const updatedContact = { firstName, lastName, email, favoriteColor, birthday };

    const db = getDb();
    const response = await db
      .db()
      .collection('contacts')
      .replaceOne({ _id: contactId }, updatedContact);

    if (response.matchedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a contact
const deleteContact = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact id' });
    }

    const contactId = new ObjectId(req.params.id);
    const db = getDb();
    const response = await db.db().collection('contacts').deleteOne({ _id: contactId });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};