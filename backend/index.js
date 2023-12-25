// app.js or index.js
import userController from './controllers/user.controller.js';


import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Rest of your application code...

import express from 'express';
import connectDb from './DB/index.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', userController.signUp);
app.post('/login', userController.login);


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app is listening on port http://localhost${PORT}`)
})


connectDb()