// server.js
import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";

// ✅ CORS Configuration - Minimal essential changes
const FRONTEND_URL = "https://react-job-portal-j7iw.vercel.app"; // Your specific Vercel domain (removed trailing slash)

app.use(
  cors({
    origin: FRONTEND_URL, // Keep it specific to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Ensure OPTIONS is present
    allowedHeaders: ["Content-Type", "Authorization"], // ESSENTIAL: Add Content-Type. Add Authorization if used.
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// ❌ REMOVE or COMMENT OUT THIS LINE: It can interfere with the specific CORS setup above
// app.options("*", cors());

// ✅ Cloudinary Configuration (Assuming this part is already working correctly)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Start the server (Assuming this part is already working correctly)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
