import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from "path";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
    path: path.resolve(__dirname, "../config/.env")
});

// Function to connect to the MongoDB database
const databaseConnection = () => {
    const mongoUri = process.env.MONGO_URI;

    
    if (!mongoUri) {
        console.error("MONGO_URI is not defined in the environment variables");
        process.exit(1); // Exit the process with failure
    }

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    });
};

export default databaseConnection;

