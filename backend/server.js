import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors"; // ✅ import cors

// ✅ Allow frontend from Vercel to access backend
const FRONTEND_URL = "https://your-frontend-name.vercel.app"; // 🔁 Replace this with your actual Vercel domain

app.use(cors({
  origin: "https://react-job-portal-kyy6.vercel.app",
  credentials: true,
}));

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
