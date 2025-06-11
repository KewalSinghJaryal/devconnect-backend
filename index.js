const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
