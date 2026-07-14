# CSE 341 — Contacts API (Part 1)

This is a working starting point that satisfies the Part 1 rubric:
- MVC structure (routes / controllers / db separated from server.js)
- GET all contacts
- GET single contact by id
- Ready to connect to MongoDB and deploy to Render

## Folder structure
```
cse341-contacts/
  server.js
  seed.js
  package.json
  .env.example
  .gitignore
  contacts.rest
  db/
    connect.js
  routes/
    index.js
    contacts.js
  controllers/
    contacts.js
```

## 1. Set up MongoDB
1. Create a free cluster at MongoDB Atlas (if you don't have one already).
2. Create a database and a collection called `contacts`.
3. Get your connection string (Atlas → Connect → Drivers → copy the URI).

## 2. Configure your project locally
1. Copy `.env.example` to a new file named `.env`.
2. Paste your MongoDB connection string into `MONGODB_URI` in `.env`.
   - **Never commit `.env` to GitHub** — it's already in `.gitignore`.
3. Install dependencies:
   ```
   npm install
   ```
4. (Optional but recommended) Insert 3 sample contacts automatically:
   ```
   npm run seed
   ```
   Or insert them manually in Atlas / Compass with fields: firstName, lastName, email, favoriteColor, birthday.

## 3. Run locally
```
npm start
```
Then test with `contacts.rest` (install the "REST Client" VS Code extension, open the file, click "Send Request" above each block) or any REST client of your choice:
- `GET http://localhost:3000/contacts` → all contacts
- `GET http://localhost:3000/contacts/<id>` → one contact (copy a real `_id` from the first response)

## 4. Push to GitHub
```
git init
git add .
git commit -m "Contacts API part 1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Double check on GitHub.com that `.env` and `node_modules` were NOT uploaded.

## 5. Deploy to Render
1. Go to Render → New → Web Service → connect your GitHub repo.
2. Build command: `npm install`
3. Start command: `npm start`
4. Under **Environment**, add a config var:
   - Key: `MONGODB_URI`
   - Value: (same connection string as your local `.env`)
5. Deploy and wait 10–15 minutes for the first build.
6. Test the live URLs in `contacts.rest` (the Render section) once it's up.

## 6. Record your video (5–8 min covers the whole rubric later, but for Part 1 just show it working)
- Show the GET all contacts route working on the deployed Render URL (not localhost).
- Show the GET single contact route working with a real id.
- Briefly show your `.env` is not on GitHub, and your project's folder structure (routes/controllers/db separated).
- Upload to YouTube (public or unlisted).

## 7. Submit in Canvas
Submit three links:
- GitHub: `https://github.com/you/yourRepo`
- Render: `https://appName.onrender.com`
- YouTube: `https://www.youtube.com/watch?v=...`
