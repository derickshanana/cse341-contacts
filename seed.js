// Run this once with: node seed.js
// It inserts 3 sample contacts into your MongoDB "contacts" collection.
const { MongoClient } = require('mongodb');
require('dotenv').config();

const contacts = [
  
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1990-01-15'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      favoriteColor: 'Green',
      birthday: '1988-06-22'
    },
    {
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex.johnson@example.com',
      favoriteColor: 'Red',
      birthday: '1995-11-03'
    },
    {
      firstName: 'Maria',
      lastName: 'Garcia',
      email: 'maria.garcia@example.com',
      favoriteColor: 'Purple',
      birthday: '1992-04-09'
    },
    {
      firstName: 'David',
      lastName: 'Kim',
      email: 'david.kim@example.com',
      favoriteColor: 'Orange',
      birthday: '1987-09-30'
    },
    {
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah.williams@example.com',
      favoriteColor: 'Yellow',
      birthday: '1993-07-18'
    },
    {
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      favoriteColor: 'Teal',
      birthday: '1991-12-25'
    }
  
];

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const result = await client.db().collection('contacts').insertMany(contacts);
    console.log(`${result.insertedCount} contacts inserted`);
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await client.close();
  }
}

seed();
