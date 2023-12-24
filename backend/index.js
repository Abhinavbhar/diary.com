// app.js or index.js

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

// Rest of your application code...

import express from 'express';
import connectDb from './DB/index.js';
const app = express();
const PORT = process.env.PORT || 3000

connectDb()