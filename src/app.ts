import dotenv from 'dotenv';
import express, { Request, Response } from 'express'; // Imports express and the Request/Response types for type safety
import ingredientRouter from './Ingredients/ingredients.routes'; // Custom router for ingredients
import mealIngredientRouter from './Meal Ingredients/mealIngredients.routes'; // Custom router for meal ingredients 
import logger from './middleware/logger.middleware'; // Custom logging middleware
import cors from 'cors'; // CORS middleware
import helmet from 'helmet'; // Security middleware

dotenv.config();

const app = express(); // Creates an instance of an Express application
const port = 3000; // Sets the port number for the app to listen on

// Enable CORS for all requests
app.use(cors());

// Parses JSON request bodies
app.use(express.json());
// Parses URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Add security-related HTTP headers
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

// Use logger middleware only in development mode
if (process.env.NODE_ENV == 'development') {
    // Add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

//Application routes
// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>')
});

// Mount routers 
app.use('/', [ingredientRouter, mealIngredientRouter]); // Use albums, tracks, and artists routes for the root path

// Start the Express server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
