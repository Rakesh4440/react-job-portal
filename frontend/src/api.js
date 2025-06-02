// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Ensure this environment variable is set in Vercel
  withCredentials: true, // Include cookies if your backend uses them
});

// Example API call
export const fetchJobs = () => API.get('/api/jobs');

// Add other API calls as needed
