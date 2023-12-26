import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDb from './DB/index.js';
import signUp from './controllers/signUp.controller.js';
import login from './controllers/user.controller.js';
import loadArticles from './controllers/loadArticles.controller.js';
import addArticles from './controllers/addArticle.controller.js';
import deleteByIndex from './controllers/deleteEntry.controller.js';
loadArticles
dotenv.config();
const app = express();

// Middleware
connectDb();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/signup', signUp);
app.post('/login', login);

// Middleware function to load articles
app.get('/dashboard', loadArticles);
app.post('/addentry', addArticles);
app.delete('/deleteByIndex', deleteByIndex);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port http://localhost:${PORT}`);
});

// Connect to the database
