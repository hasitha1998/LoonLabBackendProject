const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', function () {
    console.log('Connected to MongoDB');
  });

  module.exports = db;
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the process with an error code
}
