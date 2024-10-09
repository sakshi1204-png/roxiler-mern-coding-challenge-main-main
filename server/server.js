import express from 'express';
import 'colors'; 
import dotenv from 'dotenv';
import cors from 'cors'; // Importing cors
import connectDB from './Config/connect.js'; 
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRoutes from './Routes/databaseRoutes.js';

const app = express(); // Initializing express app

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Allow JSON parsing

dotenv.config(); // Extracting environment variables

connectDB(); // Connecting to MongoDB Atlas

// Middlewares
app.use('/', databaseRoutes); // Database Routes
app.use('/', transactionRouter); // Transaction Routes

// Listening to the port
app.listen(process.env.PORT, () => {
    console.log(`--> server is live on https://localhost:${process.env.PORT} <--`.blue.italic);
});
