// backend app.js
import express from "express";
import dbConnection from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors"; // You have this
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./config/config.env" }); // Ensure this loads .env correctly for FRONTEND_URL

// --- CORRECTED CORS CONFIGURATION ---
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"], // Add your local dev URL for convenience
                                                                 // Ensure process.env.FRONTEND_URL is correctly set on Render
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"], // Corrected: 'methods' (plural) and added OPTIONS, PATCH
    allowedHeaders: ["Content-Type", "Authorization"],        // Corrected: Added allowedHeaders
    credentials: true,
  })
);
// --- END OF CORS CONFIGURATION ---

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Log to check if FRONTEND_URL is loaded (for debugging on Render)
console.log("FRONTEND_URL from env:", process.env.FRONTEND_URL);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
