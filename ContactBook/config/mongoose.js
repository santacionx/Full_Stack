const mongoose = require('mongoose');

// Replace 'YOUR_MONGODB_URI' with the actual connection string to your MongoDB database.
const MONGODB_URI = 'mongodb://127.0.0.1:27017/contact_db';



mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Additional options, if needed
});
// Handling the connection events: Mongoose emits events during the connection process.
//  You can listen for these events to handle success or error scenarios.
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

