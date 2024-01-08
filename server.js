const MongoClient = require('mongodb').MongoClient;
const dbName = 'user_details';
const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName:dbName });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
    // Your code for interacting with the MongoDB database goes here
  }
});

// Function to create a user in the database
function connectAndExecute() {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        reject(err);
      } else {
        // Perform your MongoDB operations here
        resolve();
      }
    });
  });
}

(async function() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Perform your MongoDB operations here

    // For example, creating a user
    await createUserInDatabase();

    console.log('User created successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
})();

// Function to create a user in the database
async function createUserInDatabase() {
  // Your MongoDB user creation logic goes here
}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const mongoURI = 'mongodb://127.0.0.1:27017/';


app.use(bodyParser.json());
app.delete('/api/users/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const result = await client.db('user_details').collection('user_details').deleteOne({ _id: ObjectId(userId) });

      if (result.deletedCount === 1) {
          res.status(200).json({ message: 'User deleted successfully' });
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Example: Define other routes or middleware as needed

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.delete('/api/users/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const result = await client.db('user_details').collection('user_details').deleteOne({ _id: ObjectId(userId) });

      if (result.deletedCount === 1) {
          res.status(200).json({ message: 'User deleted successfully' });
      } else {
          res.status(404).json({ message: 'User not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
