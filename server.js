const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const db = require('./db/connect');

app.use(express.json());
app.use('/', require('./routes'));

const port = process.env.PORT || 3000;

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  }
});
