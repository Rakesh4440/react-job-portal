const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// API route example - root route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Handles any other routes and serves React's index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
