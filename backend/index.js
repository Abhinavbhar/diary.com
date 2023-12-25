import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDb from './DB/index.js';
import userController from './controllers/user.controller.js';
import loadArticles from './controllers/loadArticles.controller.js';
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
app.post('/signup', userController.signUp);
app.post('/login', userController.login);

// Middleware function to load articles
app.get('/dashboard', loadArticles);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port http://localhost:${PORT}`);
});

// Connect to the database
