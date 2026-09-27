const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file inside backend directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Initialize Database & Start Server
const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`🚀 Portfolio Backend Server running on port ${PORT} in [${process.env.NODE_ENV || 'development'}] mode`);
    console.log(`📡 Healthcheck available at: http://localhost:${PORT}/api/health`);
  });

  // Handle Unhandled Promise Rejections
  process.on('unhandledRejection', (err) => {
    console.error(`💥 Unhandled Rejection: ${err.message}`);
    // Keep running in development to avoid crashing dev workflow
  });

  // Handle Uncaught Exceptions
  process.on('uncaughtException', (err) => {
    console.error(`💥 Uncaught Exception: ${err.message}`);
  });
};

startServer();
