// 1. Necessary Imports
require('dotenv').config(); // Vercel-kku environment variables load panna thevai
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS important for React

// Unga routes files-a inga dhaan import pannanum
const courseRoutes = require('../routes/courseRoutes'); // Unga actual path maathunga
const authRoutes = require('../routes/authRoutes');     // Unga actual path maathunga


// 2. Database Connection (Outside the handler to reuse connection)
const DB_URI = process.env.MONGO_URI;

// Vercel Best Practice: Mongoose connection-a oru variable-la cache (save) pannuradhu
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        console.log('Using existing database connection');
        return cachedDb;
    }

    try {
        // Connect to Atlas DB using the URI from .env (or Vercel Env Vars)
        const db = await mongoose.connect(DB_URI, {
            // These options are now default, but good to keep for clarity
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        cachedDb = db;
        console.log('New database connection established');
        return db;
    } catch (error) {
        console.error('DB Connection Failed:', error);
        // Throw an error to signal connection failure
        throw new Error('Database connection failed!');
    }
}

// 3. Express App Setup (Standard Express code)
const app = express();
app.use(express.json());
app.use(cors()); 

// 🔥 ROUTES SETUP: Idhu dhaan correct place 🔥
// Unga app-kku routes-a (paths-a) serththidunga.
app.use('/api/courses', courseRoutes); // /api/courses route-kku courseRoutes-a use pannu
app.use('/api/auth', authRoutes);     // /api/auth route-kku authRoutes-a use pannu


// 4. Vercel Handler Function (ONLY ONE module.exports)
// Idhu dhaan Vercel-kku unga Express App-a kudukkum.
module.exports = async (req, res) => {
    // Database-a connect pannunga or existing connection-a use pannunga
    try {
        await connectToDatabase();
        // Request-a Express app-kku anuppunga
        app(req, res);
    } catch (error) {
        // If DB connection fails, send a server error response
        res.status(500).send('Server Error: Cannot connect to database.');
    }
};