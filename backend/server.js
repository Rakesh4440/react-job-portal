// Import required modules
import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";

// ✅ CORS Configuration - Allow frontend from Vercel
const FRONTEND_URL = "https://react-job-portal-kyy6.vercel.app"; // 🔁 Replace if your Vercel domain changes

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// ✅ (Optional) Preflight support for all routes
app.options("*", cors());

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
